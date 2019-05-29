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
                            <h2>Онлайн-университет современных digital-профессий</h2>
                        </header>
                        <p>Максимально практическое обучение от лидеров digital-рынка. Курсы от компаний, оттачивающих мастерство на реальных проектах. После обучения студенты смогут пройти гарантированную стажировку в этих компаниях или у партнеров онлайн-университета.</p>
                        <br/>
                        <div style={{display: `flex`, flexWrap: 'wrap'}} id="two" className="spotlights">
                        <div>
                        <h3 className="major">Практика</h3>
                        <p style={{width: `400px`}}>В процессе обучения вас ждет не только теория, но и практические задания от кураторов
                        и преподавателей Skillbox.</p>
                        </div>
                        <div>
                        <h3 className="major">Качество</h3>
                        <p style={{width: `400px`}}>Мы уверены в качестве нашего образования
                        и с удовольствием приглашаем лучших студентов на стажировку..</p>
                        </div>
                        <div>
                        <h3 className="major">Практика</h3>
                        <p style={{width: `400px`}}>В процессе обучения вас ждет не только теория, но и практические задания от кураторов
                        и преподавателей Skillbox.</p>
                        </div>

                        </div>

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
