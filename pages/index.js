import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import ConnectButton from "../components/ConnectButton";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Example connect</h1>
          <Box display="flex" justifyContent="center">
            <ConnectButton />
          </Box>
        </div>
      </main>
    </div>
  );
}
