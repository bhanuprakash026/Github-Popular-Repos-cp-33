// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, setActiveLanguageFilterId, isActive} = props
  const {id, language} = languageDetails
  const btnClassName = isActive ? 'btn-active' : 'btn'

  const onClickLanguage = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button className={btnClassName} type="button" onClick={onClickLanguage}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
