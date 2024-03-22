import React from "react";
import Image from 'next/image';
import styles from './sidebar.module.css';

const SideBar=()=>{
    return(
        <div className={styles.container}>
            <div>
                <Image />
            </div>
            Hello World
        </div>
    )
}

export default SideBar;