import React from 'react'
import './homepage.css'
import ME from '../../assets/me.png'
import { BsBookmarkCheck } from 'react-icons/bs'


const About = () => {
    return (
        <section id='about'>
            <h5>Tugas React JS Dea Course</h5>
            <h2>by Fadhilah CIkal</h2>

            <div className="container about__container">
                <div className="about__left">
                    <p>
                        Halo cuy, nama gue cikal, masih belajar2 soal ngoding mengkoding, doain ya semoga kita semua bisa selalu ngikutin materi2 dari bang dea. Oiya buat bang dea, sehat dan semangat terus ya ngontennya!
                    </p>
                </div>

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card-left'>
                            <BsBookmarkCheck className='about__icon' />
                            <h5>Tugas 1</h5>
                            <small>Routing URL POST</small>
                        </article>

                        <article className='about__card'>
                            <BsBookmarkCheck className='about__icon' />
                            <h5>Tugas 2</h5>
                            <small>Validasi Active NavBar</small>
                        </article>

                        <article className='about__card-left'>
                            <BsBookmarkCheck className='about__icon' />
                            <h5>Tugas 3</h5>
                            <small>Popup Detail API POSTS</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About