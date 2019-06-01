import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'


export default () => (
    <Layout>
        <Head>
            <title>Landing Page</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>


            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Онлайн-университет современных <br/> digital-профессий</h2>
                        </header>
                        <p>Максимально практическое обучение от лидеров digital-рынка. Курсы от компаний, оттачивающих мастерство на реальных проектах. После обучения студенты смогут пройти гарантированную стажировку в этих компаниях или у партнеров онлайн-университета.</p>
                        <br/>
                        <div style={{display: `flex`, flexWrap: 'wrap'}} id="two" className="spotlights">
                        <div>
                        <h3 className="major">Практика</h3>
                        <p style={{width: `400px`}}>В процессе обучения вас ждет не только теория, но и практические задания от кураторов
                        и преподавателей DigitalBox.</p>
                        </div>
                        <div>
                        <h3 className="major">Качество</h3>
                        <p style={{width: `400px`}}>Мы уверены в качестве нашего образования
                        и с удовольствием приглашаем лучших студентов на стажировку..</p>
                        </div>
                        <div>
                        <h3 className="major">Практика</h3>
                        <p style={{width: `400px`}}>В процессе обучения вас ждет не только теория, но и практические задания от кураторов
                        и преподавателей DigitalBox.</p>
                        </div>

                        </div>

                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic02.webp" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>DREAM TEAM</h3>
                                </header>
                                <p>С нами учатся, развиваются и меняют свою жизнь 20 000 человек. Выпускники DigitalBox делают дипломы для реальных брендов и устраиваются на работу в лучшие российские компании: Концерн «Калашников», Сбербанк, AIC. </p>
                                <ul className="actions">
                                    <li><Link href="/team"><a className="button">Подробнее</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic04.webp" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Запишитесь на курс и измените свою жизнь</h3>
                                </header>
                                <p>Учебные программы мы разрабатываем вместе с практикующими экспертами из лучших  digital-компаний — AIC, Creative People, Red Collar, QSoft, Agima, Сибирикс, Completo и других. Студентам доступно 11 курсов по дизайну, 10 по программированию, 12 по маркетингу и 4 по управлению.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Записаться</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic05.webp" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Готовим лучших</h3>
                                </header>
                                <p>Мы любим повторять, что никогда не бывает «поздно»: с нами люди находят свое призвание, работу, которая приносит удовлетворение. Не важно, сколько вам лет и чем вы занимаетесь сейчас — просто начните.</p>
                                <ul className="actions">
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
