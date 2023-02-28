const { default: classNames } = require("classnames")

const Button = (props) => {
  const { className, ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={classNames(
        "w-24 px-3 py-2 font-bold text-black text-xs bg-emerald-700 active:bg-emerald-600 border-4 border-emerald-700 rounded-xl",
        className
      )}
    />
  )
}

export default Button
