import './style.css'

import Line1 from '../../assets/vectors/line1.svg'
import Line2 from '../../assets/vectors/line2.svg'

export default function QuizGame() {
    return (<>
        <div className="header-container">
            <h1 className="title-header">Fake Quiz Game</h1>
            <p className="header-subtitle">você sabe diferenciar uma <span>notícia real de uma fake?</span></p>

            <div className="buttons">
                <a className="novo-jogo" href="http://localhost:5500/">
                    <button>NOVO JOGO</button>
                </a>
            </div>
                

            <img src={Line1} className="line-1" />
            <img src={Line2} className="line-2" />
        </div>
    </>);
};