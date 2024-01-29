import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


interface Props {
    id: string
    name: string
    socialId: string
    link: string
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => <div>
    <Image src={`/assets/team/webteam_face_${id}.svg`} alt={name} width={1366} height={1555} />
    <div className='text-2xl xl:text-2xl'>{name}</div>
    <div className=''>
        <Link target='_blank' className='text-2xl xl:text-2xl' href={link}>
            {socialId}
        </Link>
    </div>
</div>
export default Member