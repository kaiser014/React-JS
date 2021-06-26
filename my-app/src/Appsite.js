import React from 'react'
import NAVBAR from './components/NAVBAR/NAVBAR'
import SERVICE from './components/SERVICE/Service'
import FEATURE from './components/FEATURE/Feature'
import PROJECT from './components/PROJECT/project'
import CLIENT from './components/CLIENT/Client'
import ICON from './components/ICONLINK/Icon'
import FOOTER from './components/FOOTER/footer'

export default function Appsite() {
    return (
        <div>
            <NAVBAR />
            <SERVICE />
            <FEATURE />
            <PROJECT />
            <CLIENT />
            <ICON />
            <FOOTER />
        </div>
    )
}
