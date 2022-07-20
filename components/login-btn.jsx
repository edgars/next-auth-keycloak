import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/Home.module.css'
import AppToken from "./acess-token"


export default function BtnLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
       <p className={styles.description}>
        Signed in as {session.user.email} <br />

        </p>

        <p className={styles.description}>

          <AppToken/>


        </p>
        <button className={styles.description} onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
     <p className={styles.description}>
      Not signed in <br />
      </p>
      <button className={styles.description} onClick={() => signIn()}>Sign in</button>
    </>
  )
}
