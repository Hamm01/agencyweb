import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from './work'
import Image from 'next/image'

const Works: React.FC = () => {

    return (<TileWrapper numOfPages={3} >
        <TileBackground><WorkBackground /></TileBackground>
        <TileContent>
            <Tile page={0} renderContent={({ progress }) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>We built</div>
                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                            <WorkLink href="https://pinkpanda.com">
                                Pink Panda
                            </WorkLink> &apos;s app

                        </div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image src="/assets/works/pinkpanda.png" width={840} height={1620} alt="Pink Panda" />
                    </WorkRight>
                </WorkContainer>)}>
            </Tile>
            <Tile page={1} renderContent={({ progress }) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>We made</div>
                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">Steakwallet&nbsp; faster</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image src="/assets/works/steakwallet.png" width={840} height={1620} alt="Steak Wallet" />
                    </WorkRight>
                </WorkContainer>)}>
            </Tile>
            <Tile page={2} renderContent={({ progress }) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>We helped</div>
                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">Showtime ship faster</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image src="/assets/works/showtime.png" width={840} height={1620} alt="Showtime" />
                    </WorkRight>
                </WorkContainer>)}>
            </Tile>
        </TileContent>

    </TileWrapper>)
}

export default Works