import styles from './List.module.css'

function List ({count, str, arr, ...props}) {
  console.log(styles)
  return <ul>
    {arr.map((i) => {
      return <li className={styles.list}>
        <p>{i}</p>
        <div>{count}</div>
      </li>
    })}
  </ul>
}

export default List;