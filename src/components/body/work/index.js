import React from 'react'
import Separator from '../../common/separator'
import { WorkData } from '../../data/work'
import WorkCard from './word-card';
import ('./work.css')
function Work() {
    const data = WorkData;
    return (
        <div className="work">
            <Separator />
            <label className="section-title">Internship</label>
            <div className="work-list">
                {data.map((item)=>{
                    return(
                        <WorkCard item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work
