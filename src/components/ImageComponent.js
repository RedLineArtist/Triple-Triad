import classNames from "classnames"

const ImageComponent = (props) => {
  const { src, style, className } = props

  return (
    <img src={src} style={style} alt="icon" className={classNames(className)} />
  )
}

export default ImageComponent
