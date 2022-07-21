import { useState } from 'react'

import './dragDrop.scss'


import { ICard } from '../../interface'


const DragDrop: React.FC = () => {

    const [cards, setCards] = useState<ICard[]>([
        {
            id: 1,
            position: 1,
            title: 1
        },
        {
            id: 2,
            position: 2,
            title: 2
        },
        {
            id: 3,
            position: 3,
            title: 3
        },
        {
            id: 4,
            position: 4,
            title: 4
        }
    ])
    const [currentCard, setCurrentCard] = useState<ICard>()

    const dragStart = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {
        setCurrentCard(card)

    }
    const drop = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {

        setCards(cards.map(item => {

            if (item.id === card.id) {
                return { ...item, position: currentCard!.position }
            }
            if (item.id === currentCard!.id) {
                return { ...item, position: card.position }
            }
            return item

        }))
        e.currentTarget.children[0].classList.add('darken-3')
    }

    const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.currentTarget.children[0].classList.add('darken-3')
    }
    const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.currentTarget.children[0].classList.remove('darken-3')

    }

    const sortCards = (a: ICard, b: ICard) => {
        return a.position > b.position ? 1 : -1
    }


    return (

        <div className="row mt10">
            {
                cards.sort(sortCards).map(item => {
                    return (
                        <div
                            key={item.id}
                            className="col m3"
                            onDragStart={(e) => dragStart(e, item)}
                            onDragLeave={(e) => dragEnd(e)}
                            onDragEnd={(e) => dragEnd(e)}
                            onDragOver={(e) => dragOver(e)}
                            onDrop={(e) => drop(e, item)}
                            draggable={true}
                        >
                            <div
                                className="purple darken-3  card-panel  ">
                                <span className="white-text">{item.title}
                                </span>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    )
}

export default DragDrop

