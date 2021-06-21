import "../assets/styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper container">
        <div className="footer-bottom">
          <div className="footer-left">
            <div className="footer-info border-r-2 border-gray-400">
              <h1 className="footer-title">Контакты</h1>
              <p className="footer-text">г. Оренбург</p>
              <p className="footer-text">
                <span>Телефон:</span> +7 (901) 114 21 33
              </p>
              <p className="footer-text">
                <span>E-mail:</span> mishaskvor@mail.ru
              </p>
              <p className="footer-text">460009, г. Оренбург, ул. Чкалова 35</p>
            </div>
          </div>
          <div className="footer-middle">
            <div className="footer-req">
              <h1 className="footer-title">Реквизиты</h1>
              <div>
                <p className="footer-text">ИНН: 5611123123</p>
                <p className="footer-text">ОГРН: 1185641000004</p>
                <p className="footer-text">КПП: 561001001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
