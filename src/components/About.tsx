"use client"

import { useState, useEffect } from 'react'
import skillData from '../utils/skills.json'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

interface Skill {
  skill: string
  image: string
}

interface Category {
  category: string
  skills: Skill[]
}

export default function About() {
  const [skills, setSkills] = useState<Category[]>([])
  const [saved, setSaved] = useState(false)
  const [showSkills, setShowSkills] = useState(false)
  const [loading, setLoading] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const fetchSkills = () => {
    setLoading(true)
    setCountdown(2)

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0) {
          clearInterval(countdownInterval)
          setSkills(skillData)
          localStorage.setItem('skills', JSON.stringify(skillData))
          setLoading(false)
          setShowSkills(true)
          setSaved(true)

          gsap.to(window, {
            scrollTo: { y: "max", offsetY: 100 },
            duration: 1,
            ease: "power2.out"
          })
        }
        return prev - 1
      })
    }, 1000)
  }

  const clearSkills = () => {
    localStorage.removeItem('skills')
    setSaved(false)
    setSkills([])
    setShowSkills(false)

    gsap.to(window, {
      scrollTo: { y: 0, offsetY: 100 },
      duration: 1,
      ease: "power2.out"
    })
  }

  useEffect(() => {
    const savedSkills = localStorage.getItem('skills')
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills))
      setShowSkills(true)
      setSaved(true)
    }
  }, [])
  

  useEffect(() => {
    if (showSkills) {
      gsap.from(".skills-container", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "sine.in"
      })
    }
  }, [showSkills])

  return (
    <div id="next-section" className="min-h-screen min-w-full md:top-[20%] top-[20%] lg:top-[20%] text-2xl lg:text-3xl px-4 relative">
      <div className="text-center md:text-left md:absolute relative md:left-[10%] top-[40%] lg:top-[20%]">
        passionate about discovering <i className="ita"><u>innovative</u></i> ways to change perspectives,
        with a <b className="bol">sophisticated</b> and <b className="bol">creative</b> mindset. <br />
        excels at <i className="ita"><u>analyzing</u></i> problems deeply to provide <b className="bol">effective</b> solutions, <br />
        and embraces <i className="ita"><u>change</u></i> while continually seeking <b className="bol">growth </b>
        in both personal and professional life.
      </div>

      <div className="mt-12 md:absolute md:left-[10%] md:top-[35%] text-center">
        <button 
          onClick={fetchSkills} 
          className={`text-lg bt border-black border-2 md:text-3xl px-6 py-2 rounded-lg ${skills.length > 0 ? 'hidden' : ''}`}
        >
          fetch skills
        </button>

        {loading && (
          <div className="mt-8 text-lg">
            fetching skills... {countdown}s
          </div>
        )}

        <div className="skills-container mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((category, index) => (
            <div key={index} className="skill-card flex-shrink-0 p-4 border-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-center mb-4">{category.category}</h2>
              <div className="skill-list flex flex-wrap justify-center">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item flex flex-col items-center justify-center p-2 border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out">
                    <Image src={skill.image} alt={skill.skill} width={64} height={64} className="mb-2 rounded-full" />
                    <p className="text-center text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {saved && (
          <div className="mt-4 text-lg">
            skills have been saved to localstorage.
          </div>
        )}

        {saved && (
          <button onClick={clearSkills} className="bt mt-4 relative text-lg lg:text-xl bottom-2 right-0 border-black border-2 p-2">
            Clear Saved Skills
          </button>
        )}
      </div>
    </div>
  )
}
