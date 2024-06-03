'use client'
import { useEffect } from "react"

export default function Popup({ message, active, setClose }) {

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (event.code === "Escape") {
              setClose();
            }
          });
          return () => {
            document.removeEventListener("keydown", setClose);
        };
    }, [setClose]);

    useEffect(() => {
        document.body.style.overflow = active ? "hidden" : "unset";
      }, [active]);

    if (!active) return null;

    return (
        <div className={active ? "popup popup_active" : "popup"} onClick={setClose}>
            <div className="popup__wrapper" onClick={e => e.stopPropagation()}>
                <h3>{message}</h3>
                <div className="popup__close-button" onClick={setClose}>
                    <span className="popup__button-lines"></span>
                </div>
            </div>
        </div>
    )
}