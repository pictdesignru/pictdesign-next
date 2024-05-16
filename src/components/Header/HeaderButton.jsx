'use client'
const HeaderButton = ({ isActive, setIsActive }) => {

  return(
    <div className={`header__button ${isActive ? "header__button_active" : ""}`} onClick={setIsActive}>
      <span className="header__button-lines"></span>
    </div>
  )
};

export default HeaderButton;