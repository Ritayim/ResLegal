import { useState } from 'react';
import { TbUserFilled, TbHomeFilled, TbBriefcaseFilled } from 'react-icons/tb'
import { Stack, UnstyledButton } from '@mantine/core';
import styles from '../styles/NavSideBar.module.css';

const icons = [
    { icon: TbHomeFilled, label: 'Home' },
    { icon: TbBriefcaseFilled, label: 'Matter' },

];

function SideBar({ icon: Icon, label, onClick, isActive }) {
    return (
        <UnstyledButton onClick={onClick} data-active={isActive || undefined} className={styles.link}>
            <Icon size={20} stroke={1.5} />
        </UnstyledButton>
    );
}

export default function NavSideBar() {
    const [active, setActive] = useState('Home');
    const items = icons.map((item) => (
        <SideBar
            key={item.label}
            icon={item.icon}
            label={item.label}
            onClick={() => setActive(item.label)}
            isActive={item.label === active}
        />
    ));

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarMain}>
                <Stack width="100%">
                    {items}
                </Stack>
            </div>

            <div className={styles.navbarFooter}>
                <Stack justify="center">
                    <SideBar
                        icon={TbUserFilled} 
                        label="Profile" 
                    />
                </Stack>
            </div>
        </nav>
    );
}