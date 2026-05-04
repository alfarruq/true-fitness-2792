import React, { useState } from 'react';
import './Openclub.css';
import openclubimg from '../../assets/openclubimg.svg';

const OpenClub = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    openingType: '',
    launchTime: '',
    services: [],
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (service) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    setFormData({ ...formData, services: updatedServices });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Ваша заявка принята!');
  };

  return (
    <div className="main-wrapper">
      <section className="openclub_section1">
        <div className="container">
          <h5 className='openclub_section1_title'>КЛУБ TRUE</h5>
          <h1 className='openclub_section1_subtitle'>Открыть клуб вместе с TRUE</h1>
        </div>
      </section>

      <div className="container center-img">
        <img className="main-hero-img" src={openclubimg} alt="openclub" />
      </div>

      <section className="form-wrapper">
        <div className="container flex-center">
          <form className="application-form" onSubmit={handleSubmit}>
            <h2 className="form-title">ОТПРАВИТЬ ЗАЯВКУ</h2>

            <div className="input-group">
              <label>ВАШЕ ИМЯ</label>
              <input type="text" name="name" placeholder="имя" required onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>E-MAIL:</label>
              <input type="email" name="email" placeholder="E-MAIL:" required onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>НОМЕР ТЕЛЕФОНА</label>
              <div className="phone-input-container">
                <span className="flag">🇺🇿</span>
                <input type="text" name="phone" placeholder="+998 (99)-999-99-99" required onChange={handleInputChange} />
              </div>
            </div>

            <div className="input-group">
              <label>ГОРОД</label>
              <input type="text" name="city" placeholder="ГОРОД" onChange={handleInputChange} />
            </div>

            <div className="selection-group">
              <p className="section-label">ХОТИТЕ ОТКРЫТЬ:</p>
              {['Фитнес студия', 'Фитнес клуб', 'Домашний спортзал', 'Тренажерный зал в отеле', 'Корпоративный спортзал'].map((item) => (
                <label key={item} className="custom-control">
                  <input type="radio" name="openingType" value={item} onChange={handleInputChange} />
                  <span className="control-text">{item}</span>
                </label>
              ))}
            </div>

            <div className="selection-group">
              <p className="section-label">ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:</p>
              {['Срочно', 'В течение 3 месяцев', 'В течение 6 месяцев', 'Более 6 месяцев'].map((item) => (
                <label key={item} className="custom-control">
                  <input type="radio" name="launchTime" value={item} onChange={handleInputChange} />
                  <span className="control-text">{item}</span>
                </label>
              ))}
            </div>

            <div className="selection-group">
              <p className="section-label">КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</p>
              {['Консультация', 'Подбор оборудования', 'Расстановка тренажеров', 'Лизинг'].map((service) => (
                <label key={service} className="custom-control">
                  <input type="checkbox" onChange={() => handleCheckboxChange(service)} />
                  <span className="control-text">{service}</span>
                </label>
              ))}
            </div>

            <div className="upload-section">
              <p className="section-label">ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ</p>
              <button type="button" className="add-file-btn">ADD FILES</button>
            </div>

            <div className="input-group">
              <label>КОММЕНТАРИЙ</label>
              <textarea name="comment" rows="1" onChange={handleInputChange}></textarea>
            </div>

            <button type="submit" className="submit-btn">ОТПРАВИТЬ</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default OpenClub;