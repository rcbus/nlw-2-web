import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = (props) => {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG8D_AEyZS_KA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=-NIiguTbT3bnmZga7WzbOqHPmUDrWhDqTWxpI-qZHiw" alt="Cleiton Cavalcanti" />
                <div>
                    <strong>Cleiton Cavalcanti</strong>
                    <span>Arduino</span>
                </div>
            </header>

            <p>
            Profissional na integração de Arduino com Web e Mobile.
            <br/><br/>
            Arduino é uma plataforma de prototipagem eletrônica de hardware livre e de placa única, projetada com um microcontrolador Atmel AVR com suporte de entrada/saída embutido, uma linguagem de programação padrão, a qual tem origem em Wiring, e é essencialmente C/C++.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;