import React, { useState } from "react";
import './style.css';
import data from './index';


export const Accordion: React.FC = () => {

    const [selectedAccordion, setSelectedAccordion] = useState<number | null>();

    const selectAccordion = ( id : number) => {
        setSelectedAccordion((prev) => {
            if(prev == id){
                return null
            }else{
                return id;
            }
        });
    }

    return(
        <>
            <div className="accordion-wrapper">
                {
                    data.map((item) => {
                        return (
                            <div className="accordion-item">
                                <div className="accordion-question" onClick={() => selectAccordion(item.id)}>
                                    <div>
                                        <p>{item.question}</p>
                                    </div>
                                    <div>
                                        <span>+</span>
                                    </div>
                                </div>
                                {

                                    selectedAccordion && selectedAccordion == item.id &&
                                    <div className="accordion-answer" >
                                         <p>{item.answer}</p>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}