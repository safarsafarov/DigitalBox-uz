const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Имя</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="phone">Телефон</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Заказать звонок" className="special" /></li>
                        <li><input type="reset" value="Очистить" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span><a href='tel:+998951995544'>+998951995544</a></span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Г.Ташкент<br />
                        <br />
                        улица Мустакиллик, 59А</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
