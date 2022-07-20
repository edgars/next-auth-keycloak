import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/Home.module.css'

export default function AppToken() {

  const { data } = useSession()
  const { accessToken } = data
  return <div className={styles.code}>
    <p className={styles.description}>Token from User</p>
    <textarea className={styles.code} rows="20" cols="150">{accessToken}</textarea>
    </div>
}
