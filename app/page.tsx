import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Server,
  Database,
  Smartphone,
  ExternalLink,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import { Navbar, MobileNav } from "@/components/navbar"
import { SectionObserver } from "@/components/section-observer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">DevPortfólio</span>
          </div>
          <Navbar />
          <div className="flex items-center gap-2">
            <MobileNav />
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Contrate-me
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex animate-fade-in" variant="outline">
                    Desenvolvedor Full Stack
                  </Badge>
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in"
                    style={{ animationDelay: "200ms" }}
                  >
                    Criando experiências digitais que importam
                  </h1>
                  <p
                    className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in"
                    style={{ animationDelay: "400ms" }}
                  >
                    Desenvolvo aplicações robustas e escaláveis com tecnologias modernas para resolver problemas reais.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in"
                  style={{ animationDelay: "600ms" }}
                >
                  <Button size="lg">
                    Ver Meus Trabalhos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Baixar Currículo
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "800ms" }}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "1000ms" }}>
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Foto do desenvolvedor"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <SectionObserver id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Sobre Mim</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Quem Sou Eu</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sou um desenvolvedor full stack apaixonado com mais de 5 anos de experiência construindo aplicações
                  web e mobile. Me especializo em criar soluções escaláveis e amigáveis que resolvem problemas reais de
                  negócios.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <SectionObserver animateFrom="left" delay={200}>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Imagem sobre mim"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </SectionObserver>
              <SectionObserver animateFrom="right" delay={400}>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Solucionador de Problemas</h3>
                        <p className="text-muted-foreground">
                          Gosto de enfrentar desafios complexos e encontrar soluções elegantes através do código.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Aprendiz Contínuo</h3>
                        <p className="text-muted-foreground">
                          Estou constantemente explorando novas tecnologias e metodologias para aprimorar meu trabalho.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Trabalho em Equipe</h3>
                        <p className="text-muted-foreground">
                          Prospero em ambientes colaborativos e gosto de trabalhar com equipes multidisciplinares.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </SectionObserver>
            </div>
          </div>
        </SectionObserver>

        {/* Skills Section */}
        <SectionObserver id="habilidades" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Minha Especialidade</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Habilidades Técnicas</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trabalho com diversas tecnologias em toda a stack para construir soluções completas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Frontend",
                  icon: <Code className="h-6 w-6 text-primary" />,
                  description: "React, Next.js, TypeScript, Tailwind CSS, Redux",
                  delay: 100,
                },
                {
                  title: "Backend",
                  icon: <Server className="h-6 w-6 text-primary" />,
                  description: "Node.js, Express, NestJS, Python, Django, GraphQL",
                  delay: 200,
                },
                {
                  title: "Banco de Dados",
                  icon: <Database className="h-6 w-6 text-primary" />,
                  description: "PostgreSQL, MongoDB, MySQL, Redis, Prisma",
                  delay: 300,
                },
                {
                  title: "Mobile",
                  icon: <Smartphone className="h-6 w-6 text-primary" />,
                  description: "React Native, Flutter, Desenvolvimento iOS/Android",
                  delay: 400,
                },
              ].map((skill, index) => (
                <SectionObserver key={index} delay={skill.delay}>
                  <Card className="flex flex-col items-center text-center border-border bg-card">
                    <CardContent className="pt-6">
                      <div className="mb-4 rounded-full bg-primary/10 p-3">{skill.icon}</div>
                      <h3 className="text-lg font-bold">{skill.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                </SectionObserver>
              ))}
            </div>
          </div>
        </SectionObserver>

        {/* Projects Section */}
        <SectionObserver id="projetos" className="w-full py-12 md:py-24 lg:py-32 bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Meus Trabalhos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projetos em Destaque</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Uma seleção dos meus trabalhos recentes em diferentes áreas e tecnologias.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project, index) => (
                <SectionObserver key={project} delay={index * 200}>
                  <Card className="overflow-hidden border-border bg-card">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=300&width=500`}
                        width={500}
                        height={300}
                        alt={`Projeto ${project}`}
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge className="mb-2">Aplicação Web</Badge>
                      <h3 className="text-xl font-bold">Projeto {project}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Uma aplicação full-stack construída com React, Node.js e PostgreSQL.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">PostgreSQL</Badge>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <Link href="#" className="text-sm font-medium text-primary hover:underline">
                          Ver Demo
                        </Link>
                        <Link href="#" className="flex items-center text-sm font-medium text-primary hover:underline">
                          GitHub
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </SectionObserver>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </SectionObserver>

        {/* Testimonials Section */}
        <SectionObserver id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Depoimentos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O Que Dizem os Clientes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Feedback de pessoas com quem trabalhei em diversos projetos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alexandre Silva",
                  role: "Gerente de Produto",
                  company: "TechCorp",
                  testimonial:
                    "Trabalhar com este desenvolvedor foi um prazer. Ele entregou o projeto no prazo e superou nossas expectativas com a qualidade do seu trabalho.",
                },
                {
                  name: "Sara Oliveira",
                  role: "CEO",
                  company: "StartupX",
                  testimonial:
                    "Um desenvolvedor excepcional que entende tanto os aspectos técnicos quanto os de negócio de um projeto. Certamente trabalharíamos com ele novamente.",
                },
                {
                  name: "Miguel Costa",
                  role: "CTO",
                  company: "InnovateInc",
                  testimonial:
                    "Sua atenção aos detalhes e habilidades de resolução de problemas são excepcionais. Ele nos ajudou a superar vários desafios técnicos com soluções elegantes.",
                },
              ].map((testimonial, index) => (
                <SectionObserver key={index} delay={index * 200}>
                  <Card className="relative overflow-hidden border-border bg-card">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-muted-foreground">"</div>
                      <p className="mt-4 text-muted-foreground">{testimonial.testimonial}</p>
                      <div className="mt-6 flex items-center gap-4">
                        <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                          <Image
                            src={`/placeholder.svg?height=40&width=40`}
                            width={40}
                            height={40}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SectionObserver>
              ))}
            </div>
          </div>
        </SectionObserver>

        {/* Contact Section */}
        <SectionObserver id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-muted/10">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Entre em Contato</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Vamos Trabalhar Juntos</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tem um projeto em mente? Adoraria ouvir sobre ele. Envie-me uma mensagem e vamos criar algo incrível.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Email
                </Button>
                <Button size="lg" variant="outline">
                  Agendar uma Ligação
                </Button>
              </div>
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>contato@exemplo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-muted-foreground" />
                  <span>+55 (11) 98765-4321</span>
                </div>
              </div>
            </div>
            <SectionObserver animateFrom="right">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nome
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="João"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Sobrenome
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Silva"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="joao.silva@exemplo.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Conte-me sobre o seu projeto..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </SectionObserver>
          </div>
        </SectionObserver>
      </main>
      <footer className="w-full border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DevPortfólio. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
