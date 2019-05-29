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
                        <p>Skillbox — это 175 профессионалов и 13 отделов — менеджмент, hr, продажи, маркетинг, дизайн, видеопродакшн, it-разработчики и даже собственная редакция. Мы работаем в просторном лофте рядом со станцией метро «Бауманская».
Жизнь Skillbox
Студенты
С нами учатся, развиваются и меняют свою жизнь 20 000 человек. Выпускники Skillbox делают дипломы для реальных брендов и устраиваются на работу в лучшие российские компании: Концерн «Калашников», Сбербанк, AIC.
Жизнь Skillbox
Курсы
Учебные программы мы разрабатываем вместе с практикующими экспертами из лучших  digital-компаний — AIC, Creative People, Red Collar, QSoft, Agima, Сибирикс, Completo и других. Студентам доступно 11 курсов по дизайну, 10 по программированию, 12 по маркетингу и 4 по управлению.
Жизнь Skillbox
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
                            <a className="image"><img src="/static/images/pic08.webp" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Lorem</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/landing"><a className="button">Подробнее</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic09.webp" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Lorem</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Подробнее</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic10.webp" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Lorem</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Подробнее</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
