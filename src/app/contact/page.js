'use client'
import { contacts, inputs } from "@/data/data";
import Form from "@/components/Form/Form";
import { mainApi } from "@/Utils/api";
import Image from "next/image";

export default function Page() {

    return (
        <>
            <section className="contacts">
                <div className="contacts__wrapper">
                    <h1>Контакты</h1>
                    <p>Свяжитесь с нами любым удобным для Вас способом:</p>
                    <ul>
                        {contacts.map((contact, i) => {
                            return (
                                <li key={i}>
                                    <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={contact.icon} width={30} alt="Pict icon" />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                </div>
            </section>
            <Form
                title={"Мы можем сами связаться с вами, если вы оставите свои контакты :)"}
                inputs={inputs}
                buttonText={'Отправить'}
            />
        </>
    )
}