"use client";
import styles from "./page.module.css";

// components
import Login from "@/components/template/Login";

export default function Home() {
	return (
		<div className={styles.page}>
			<Login />
		</div>
	);
}
