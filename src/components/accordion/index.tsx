import React, { useState } from "react";
import './style.css';
import data from './index';
import { selectedAccordion } from '../../utils/types';


export const Accordion: React.FC = () => {

    const [selectedAccordion, setSelectedAccordion] = useState<selectedAccordion>({});
    const [enableMultipleSelection, setMultipleSelection] = useState<boolean>(false);

    const selectAccordion = ( id : number) : void => {
        setSelectedAccordion((prev) => {
            if(enableMultipleSelection){
                prev = { ...prev, [id] : !prev[id]};
                return prev
            }else{
               return { [id]: !prev[id]}
            }
        });
    }

    const selectMultiple = () : void => {
        setMultipleSelection((prev) => (!prev));
    }

    return(
        <>
            <div className="accordion-container">
                <button onClick={selectMultiple}>SELECT MULTIPLE OPTION</button>
                <div className="accordion-wrapper">
                    {
                        data.map((item, index) => {
                            return (
                                <div className="accordion-item" key={index}>
                                    <div className="accordion-question" onClick={() => selectAccordion(item.id)}>
                                        <div>
                                            <p>{item.question}</p>
                                        </div>
                                        <div>
                                            <span>+</span>
                                        </div>
                                    </div>
                                    {

                                        selectedAccordion && selectedAccordion[item.id] &&
                                        <div className="accordion-answer" >
                                            <p>{item.answer}</p>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}