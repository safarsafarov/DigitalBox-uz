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
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/company"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.webp')`}}>
                        <header className="major">
                            <h3>Наша команда</h3>
                            <p>feugiat amet tempus</p>
                        </header>
                        <Link href="/team"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.webp')`}}>
                        <header className="major">
                            <h3>Все Курсы</h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.webp')`}}>
                        <header className="major">
                            <h3>Контакты</h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.webp')`}}>
                        <header className="major">
                            <h3>Портфолио</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.webp')`}}>
                        <header className="major">
                            <h3>Наши Студенты</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Massa libero</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
