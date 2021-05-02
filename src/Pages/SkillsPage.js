import React from 'react'
import Tittle from '../Components/Tittle'
import SkillSection from '../Components/SkillSection'
import c from '../images/languages logo/c.png';
import python from '../images/languages logo/python.png';
import java from '../images/languages logo/java.png';
import html from '../images/languages logo/html.png';
import css from '../images/languages logo/css.png';
import js from '../images/languages logo/js.png';
import jquery from '../images/languages logo/jquery.png';
import json from '../images/languages logo/json.png';
import ajax from '../images/languages logo/ajax.png';
import php from '../images/languages logo/php.png';
import xml from '../images/languages logo/xml.png';
import mysql from '../images/languages logo/mysql.png';
import oracle from '../images/languages logo/oracle.png';
import bootstrap from '../images/languages logo/bootstrap.png';
import laravel from '../images/languages logo/laravel.png';
import react from '../images/languages logo/react.png';

const SkillsPage = () => {
    return (
        <div className="SkillsPage">
            <Tittle title={"My Skills"} span={"My Skills"} />
            <div className="skill-container">
                <SkillSection skill={'C'} img={<img src={c} alt=""></img>}/>
                <SkillSection skill={'Python'} img={<img src={python} alt=""></img>}/>
                <SkillSection skill={'JAVA'} img={<img src={java} alt=""></img>}/>
                <SkillSection skill={'HTML5'} img={<img src={html} alt=""></img>}/>
                <SkillSection skill={'CSS3'} img={<img src={css} alt=""></img>}/>
                <SkillSection skill={'JavaScript'} img={<img src={js} alt=""></img>}/>
                <SkillSection skill={'jQuery'} img={<img src={jquery} alt=""></img>}/>
                <SkillSection skill={'JSON'} img={<img src={json} alt=""></img>}/>
                <SkillSection skill={'AJAX'} img={<img src={ajax} alt=""></img>}/>
                <SkillSection skill={'PHP'} img={<img src={php} alt=""></img>}/>
                <SkillSection skill={'XML'} img={<img src={xml} alt=""></img>}/>
                <SkillSection skill={'MySQL'} img={<img src={mysql} alt=""></img>}/>
                <SkillSection skill={'OracleDB'} img={<img src={oracle} alt=""></img>}/>
                <SkillSection skill={'Bootstrap'} img={<img src={bootstrap} alt=""></img>}/>
                <SkillSection skill={'LARAVEL PHP'} img={<img src={laravel} alt=""></img>}/>
                <SkillSection skill={'React Js'} img={<img src={react} alt=""></img>}/>
                {/* <SkillSection skill={'Machine Learning'} img={<img src={avatar}></img>}/>
                <SkillSection skill={'Deep Learning'} img={<img src={avatar}></img>}/>
                <SkillSection skill={'Image Processing'} img={<img src={avatar}></img>}/>
                <SkillSection skill={'Semantic Segmentation'} img={<img src={avatar}></img>}/> */}
            </div>
        </div>
    )
}

export default SkillsPage
