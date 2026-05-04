import React from 'react'
import shovi1 from '/src/assets/shovi1.png'
import shovi2 from '/src/assets/shovi2.png'
import shovi3 from '/src/assets/shovi3.png'
import shovi4 from '/src/assets/shovi4.png'
import shovi5 from '/src/assets/shovi5.png'
import shovi6 from '/src/assets/shovi6.png'
import shovi7 from '/src/assets/shovi7.png'
import shovi8 from '/src/assets/shovi8.png'
import shovibg from '/src/assets/shovibg.png'

const Shovi = () => {
    return (
        <>
            <div className='max-w-385 m-auto'>
                <div className='bg-[#01AEE7] m-auto pt-13.75 pb-17.75 '>
                    <div className='w-230 text-center m-auto'>
                        <p className='text-[#FFF500] uppercase font-bold text-[13px]'>Наши преимущества</p>

                        <h1 className='text-[35px] mb-10.75 mt-10.75 uppercase font-bold text-white'>Преимущества TRUE FITNESS</h1>

                        <p className='text-[18px] uppercase text-white font-bold'>Благодаря которым мы являемся мировым лидером в производстве фитнес-оборудования</p>
                    </div>
                </div>

                <div className='flex flex-wrap gap-5 w-310 m-auto justify-between mt-16'>
                    <div className='w-73.75'>
                        <img src={shovi1} alt="Shovi 1" />
                        <h4 className='text-[#01AEE7] text-[22px] font-bold text-center uppercase'>Лучшие характеристики в классе</h4>
                        <p className='text-[13px] mt-3.5 font-normal text-center capitalize'>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className='w-73.75'>
                        <img src={shovi2} alt="Shovi 1" />
                        <h4 className='text-[#01AEE7] text-[22px] font-bold text-center uppercase'>Высокая надежность оборудования</h4>
                        <p className='text-[13px] mt-12 font-normal text-center capitalize'> Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.</p>
                    </div>
                    <div className='w-73.75'>
                        <img src={shovi3} alt="Shovi 1" />
                        <h4 className='text-[#01AEE7] text-[22px] font-bold text-center uppercase'>Низкая стоимость владения  </h4>
                        <p className='text-[13px] mt-9.75 font-normal text-center capitalize '> Тренажеры способны выдерживать серьезную эксплуатационную нагрузку, сохраняя минимальные затраты на сервис, что обеспечивает минимальную стоимость владения</p>
                    </div>
                    <div className='w-73.75'>
                        <img src={shovi4} alt="Shovi 1" />
                        <h4 className='text-[#01AEE7] text-[22px] font-bold text-center uppercase'> Качественный и оперативный сервис </h4>
                        <p className='text-[13px] mt-10 font-normal text-center capitalize'>Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание наличию всех необходимых запчастей и высокой срочности технического реагирования </p>
                    </div>
                    <div className='w-73.75'>
                        <img src={shovi5} alt="Shovi 1" />
                        <h4 className='text-[#01AEE7] text-[22px] font-bold text-center uppercase'> Цены ниже, чем у аналогов </h4>
                        <p className='text-[13px] mt-10 font-normal text-center capitalize '> Стоимость тренажеров вас приятно удивит. Несмотря на то, что мы полностью превосходим конкурентов, наши цены ниже</p>
                    </div>
                    <div className='w-73.75'>
                        <img src={shovi6} alt="Shovi 1" />
                        <h4 className='text-[#01AEE7] text-[22px] font-bold text-center uppercase'> Совершенная производительность </h4>
                        <p className='text-[13px] font-normal text-center capitalize mt-10'>Тренажеры TRUE обеспечивают непревзойденный уровень тренировок, для достижения самых высоких результатов. </p>
                    </div>
                    <div className='w-73.75'>
                        <img src={shovi7} alt="Shovi 1" />
                        <h4 className='text-[#01AEE7] text-[22px] font-bold text-center uppercase'> Абсолютные лидеры по количеству инноваций </h4>
                        <p className='text-[13px] font-normal text-center capitalize mt-3'>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей </p>
                    </div>
                    <div className='w-73.75'>
                        <img src={shovi8} alt="Shovi 1" />
                        <h4 className='text-[#01AEE7] text-[22px] font-bold text-center uppercase'>Максимальное удобство и функциональность  </h4>
                        <p className='text-[13px] mt-3 font-normal text-center capitalize'> Компания TRUE продумывает все технические нюансы и делает тренажеры максимально удобными и функциональными</p>
                    </div>
                </div>

                <div className='mt-16'>
                    <div className='relative'>
                        <p className='bg-[#01AEE7] w-40.5 text-center m-auto mb-7.75 text-white font-bold text-[18px] z-1 absolute right-175' > TOP 5</p>
                        <div className='border-t-2 border-[#01AEE7] text-transparent w-310 absolute top-3 right-35' >d</div>
                    </div>

                    <h2 className='text-[30px] absolute left-35 w-310 uppercase font-normal text-center m-auto mt-10.75 mb-48'>Бренд TRUE Fitness входит в TOП 5 крупнейших производителей фитнес оборудования</h2>

                    <div className='relative'>
                        <div className='border-t-2 border-[#01AEE7] text-transparent w-310 absolute top-35 right-35' >d</div>
                    </div>
                </div>

                <div className='bg-cover bg-center top-50 px-15 py-12.5 relative mt-16' style={{ backgroundImage: `url(${shovibg})` }}>
                    <div className='bg-[#120E0E5E] pt-10.75 pb-20.25 px-10 text-center'>
                        <p className='text-[#FFF500] text-[15px] font-bold'>TRUE FITNESS</p>

                        <h3 className='w-173.25 text-[40px] uppercase text-white font-bold text-center m-auto mt-16'>Получите <span className='text-[#01AEE7]'>эксклюзивное предложение</span>   на тренажеры <span className='text-[#01AEE7]'>TRUE FITNESS</span> </h3>

                        <p className='text-[#FFF500] text-[15px] uppercase font-bold'>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>

                        <div className=' mt-16'>
                            <div className='flex justify-center items-center gap-5'>
                                <input className='bg-[#D9D9D9] w-74 flex items-center py-4.5 pl-3.75 text-black placeholder:text-black font-bold' type="text" placeholder='ИМЯ' />
                                <input className='bg-[#D9D9D9] w-74 flex items-center py-4.5 pl-3.75 text-black placeholder:text-black font-bold' type="number" placeholder='+998 (99) 999-99-99' />
                                <input className='bg-[#D9D9D9] w-74 flex items-center py-4.5 pl-3.75 text-black placeholder:text-black font-bold' type="email" placeholder='E-MAIL' />
                                <button className='bg-[#01AEE7] w-74 text-white text-[20px] flex items-center justify-center font-bold py-3.75 px-19.5'>Отправить</button>
                            </div>

                            <p className='mt-5 w-191.75 m-auto font-bold text-white text-[15px]'>«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Shovi