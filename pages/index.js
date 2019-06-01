import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.webp')`}}>
                        <header className="major">
                            <h3>Компания</h3>
                        </header>
                        <Link href="/company"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.webp')`}}>
                        <header className="major">
                            <h3>Наша команда</h3>

                        </header>
                        <Link href="/team"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.webp')`}}>
                        <header className="major">
                            <h3>Все Курсы</h3>

                        </header>
                        <Link href="/allcourses"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.webp')`}}>
                        <header className="major">
                            <h3>Контакты</h3>

                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.webp')`}}>
                        <header className="major">
                            <h3>Партнеры</h3>

                        </header>
                        <Link href="/partners"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.webp')`}}>
                        <header className="major">
                            <h3>Наши Студенты</h3>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>DigitalBox</h2>
                        </header>
                        <p>
                        Мы все увлечены своей работой и образованием в целом. Наши практические курсы меняют жизни тысяч людей к лучшему, и это важно для каждого члена команды.</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Записаться на курс</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
