import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {Button} from "@chakra-ui/button";
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Handle-turni</title>
            </Head>

            <h1 className={styles.title}>Applicazione per Gestione turni</h1>

            <Link href="/turni">
                <Button>Turni</Button>
            </Link>
        </div>
    );
}
