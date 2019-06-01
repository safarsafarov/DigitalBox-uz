import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Team</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Команда</h2>
                        </header>
                        <p>DigitalBox — это 175 профессионалов и 13 отделов — менеджмент, hr, продажи, маркетинг, дизайн, видеопродакшн, it-разработчики и даже собственная редакция. Мы работаем в просторном лофте рядом со станцией метро «Бауманская».
Жизнь DigitalBox
Студенты
С нами учатся, развиваются и меняют свою жизнь 20 000 человек. Выпускники DigitalBox делают дипломы для реальных брендов и устраиваются на работу в лучшие российские компании: Концерн «Калашников», Сбербанк, AIC.
Жизнь DigitalBox
Курсы
Учебные программы мы разрабатываем вместе с практикующими экспертами из лучших  digital-компаний — AIC, Creative People, Red Collar, QSoft, Agima, Сибирикс, Completo и других. Студентам доступно 11 курсов по дизайну, 10 по программированию, 12 по маркетингу и 4 по управлению.
Жизнь DigitalBox
Готовим лучших
Мы любим повторять, что никогда не бывает «поздно»: с нами люди находят свое призвание, работу, которая приносит удовлетворение. Не важно, сколько вам лет и чем вы занимаетесь сейчас — просто начните.
</p>
                        <br/>
                        <div style={{display: `flex`, flexWrap: 'wrap'}} id="two" className="spotlights">

                        </div>
                        <span className="image main"><img   src="/static/images/team.webp" alt="" /></span>
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
                                    <h3>Профессия <br/> веб-разработчик <br/> с 0 до PRO</h3>
                                </header>
                                <p>115 часов – и вы научитесь создавать сайты и интернет-магазины, зарабатывайте на этом 120 тысяч рублей в месяц. После прохождения обучения — гарантированное трудоустройство. </p>

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

                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
