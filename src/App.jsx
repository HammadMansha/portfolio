import { useEffect, useRef, useState } from 'react'
import { experience, gallery, profile, projects, skills, stats } from './data'

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const nodes = root.querySelectorAll('.inview')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.16 },
    )
    nodes.forEach((node) => io.observe(node))
    const fallback = window.setTimeout(() => {
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect()
        if (rect.top < window.innerHeight) node.classList.add('visible')
      })
    }, 400)
    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return ref
}

export default function App() {
  const page = useReveal()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const copyText = async (value, label, fallbackHref) => {
    try {
      await navigator.clipboard.writeText(value)
      setToast(`${label} copied`)
      window.setTimeout(() => setToast(''), 1800)
    } catch {
      if (fallbackHref) window.location.href = fallbackHref
    }
  }

  const closeMenu = () => setOpen(false)

  return (
    <div className="site" ref={page}>
      <div className="noise" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="wrap nav-inner">
          <a className="logo" href="#top">
            Hammad <span>Ul Hassan</span>
          </a>
          <div className={`nav-links ${open ? 'open' : ''}`}>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#apps" onClick={closeMenu}>Apps</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Available for work
          </a>
          <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            Menu
          </button>
        </div>
      </nav>

      <header className="hero wrap" id="top">
        <p className="eyebrow reveal">Senior Flutter Developer · Lahore</p>
        <h1 className="reveal d1">
          Hammad
          <br />
          <em>Ul Hassan</em>
        </h1>
        <div className="hero-copy">
          <div>
            <p className="lede reveal d2">
              I build cross-platform apps that feel native, move fast, and stay
              elegant long after the first release.
            </p>
            <div className="hero-actions reveal d3">
              <a className="btn btn-primary" href="#work">View selected work</a>
              <a className="btn btn-ghost" href={profile.upwork} target="_blank" rel="noreferrer">
                Upwork
              </a>
              <a className="btn btn-ghost" href={`tel:${profile.phone}`}>
                Call
              </a>
            </div>
          </div>
          <div className="hero-meta reveal d4">
            <div>Currently at Technupur, shipping Global 365 Accounting & Payroll.</div>
            <div>Fintech · On-device AI · Web3 · Ecommerce</div>
            <div>{profile.location}</div>
          </div>
        </div>
        <div className="stats">
          {stats.map((item, index) => (
            <article className={`stat reveal d${index + 2}`} key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </header>

      <section id="work">
        <div className="wrap">
          <div className="section-head inview">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Products shipped to production.</h2>
            </div>
            <p>
              A mix of finance platforms, AI-native mobile apps, and store-published
              consumer products.
            </p>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <article className={`card ${project.accent} inview`} key={project.title}>
                {project.image ? (
                  <div className={`card-media ${project.imageKind}`}>
                    <img src={project.image} alt={`${project.title} screenshot`} />
                  </div>
                ) : (
                  <div className="card-media phone">
                    <div className="phone-mock">
                      <span className="notch" />
                      <strong>{project.mock.title}</strong>
                      <small>{project.mock.line}</small>
                    </div>
                  </div>
                )}
                <div>
                  <div className="card-top">
                    <span>{project.role}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.blurb}</p>
                </div>
                <div>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="card-links">
                    {project.links.map((link) => (
                      <a key={link.href + link.label} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apps">
        <div className="wrap">
          <div className="section-head inview">
            <div>
              <p className="eyebrow">On device</p>
              <h2>Mobile app screenshots.</h2>
            </div>
            <p>
              Official Ultralytics YOLO store shots from the live iOS and Android apps.
              More product links sit on the cards above.
            </p>
          </div>
          <div className="gallery">
            {gallery.map((shot) => (
              <a className="phone-frame inview" key={shot.src} href={shot.href} target="_blank" rel="noreferrer">
                <img src={shot.src} alt={shot.caption} />
                <div>
                  <strong>{shot.title}</strong>
                  <span>{shot.caption}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="section-head inview">
            <div>
              <p className="eyebrow">Experience</p>
              <h2>Teams I have built with.</h2>
            </div>
            <p>From associate work to senior ownership across AI, fintech, and consumer apps.</p>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="job inview" key={job.company + job.dates}>
                <div>
                  <h3>{job.company}</h3>
                  <div className="dates">{job.dates}</div>
                  <div className="place">{job.place}</div>
                </div>
                <div>
                  <h3>{job.role}</h3>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap about-grid">
          <div className="portrait inview">
            <div className="monogram">H</div>
            <div className="portrait-card">
              <small>BSCS · 2017 — 2021</small>
              <h3>Computer Science</h3>
              <p>Clean architecture, MVVM, and a bias for interfaces that feel considered.</p>
            </div>
          </div>
          <div className="about-copy inview">
            <p className="eyebrow">About</p>
            <h2>Craft, then performance.</h2>
            <p>{profile.summary}</p>
            <p>
              Recent work includes bank feeds and payroll engines, offline face
              recognition, YOLO on-device vision, and a Web3 travel wallet — always
              with reusable UI and store-ready polish.
            </p>
            <div className="chips">
              <span className="chip">Available for senior Flutter roles</span>
              <span className="chip">Remote or Lahore</span>
              <span className="chip">iOS + Android</span>
            </div>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 36 }}>
          <div className="skills">
            {skills.map((group) => (
              <article className="skill-card inview" key={group.group}>
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact-panel inview">
            <div>
              <p className="eyebrow">Let’s talk</p>
              <h2>Have a product that needs to feel inevitable?</h2>
              <p>
                I am open to senior Flutter roles, ambitious mobile builds, and
                teams that care about craft.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  Write an email
                </a>
                <a className="btn btn-ghost" href={profile.upwork} target="_blank" rel="noreferrer">
                  Upwork
                </a>
              </div>
            </div>
            <div className="contact-list">
              <a href={`tel:${profile.phone}`}>
                <span>
                  <small>Phone</small>
                  <div>{profile.phoneLabel}</div>
                </span>
                <span>Call</span>
              </a>
              <a href={`https://wa.me/${profile.phone.replace('+', '')}`} target="_blank" rel="noreferrer">
                <span>
                  <small>WhatsApp</small>
                  <div>{profile.phoneLabel}</div>
                </span>
                <span>Chat</span>
              </a>
              <button type="button" onClick={() => copyText(profile.email, 'Email', `mailto:${profile.email}`)}>
                <span>
                  <small>Email</small>
                  <div>{profile.email}</div>
                </span>
                <span>Copy</span>
              </button>
              <a href={profile.upwork} target="_blank" rel="noreferrer">
                <span>
                  <small>Upwork</small>
                  <div>Hire me on Upwork</div>
                </span>
                <span>Open</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span>
                  <small>LinkedIn</small>
                  <div>hammad-ul-hassan</div>
                </span>
                <span>Open</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span>
                  <small>GitHub</small>
                  <div>HammadMansha</div>
                </span>
                <span>Open</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with care in Lahore</span>
      </footer>

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  )
}
