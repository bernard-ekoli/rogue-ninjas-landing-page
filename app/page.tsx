"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Users, Target, Shield, Zap, Play, Menu, X } from "lucide-react"

export default function RogueNinjasPortfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">RogueÑinjaş</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#livestreams" className="text-muted-foreground hover:text-foreground transition-colors">
                Livestreams
              </a>
              <a href="https://chat.whatsapp.com/J8QSLJ9siyW6hWf0QwPCB4?mode=ems_share_t" target="blank">
                <Button variant="outline" size="sm">
                  Join Clan
                </Button>
              </a>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#about"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#livestreams"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Livestreams
                </a>
                <div className="px-3 py-2">
                  <a href="https://chat.whatsapp.com/J8QSLJ9siyW6hWf0QwPCB4?mode=ems_share_t" target="blank">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Join Clan
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              Elite CODM Clan
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              RogueÑinjaş
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Operating with skill, strategy, and stealth—just like true ninjas. Only the elite belong here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://chat.whatsapp.com/J8QSLJ9siyW6hWf0QwPCB4?mode=ems_share_t">
                <Button size="lg" className="text-lg px-8">
                  <Users className="mr-2 h-5 w-5" />
                  Join WhatsApp Group
                </Button>
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-accent font-bold text-lg">#StayRogue</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About RogueNinjas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A dedicated and competitive Call of Duty Mobile clan focused on dominating the battlefield
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Squad Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Strategic team coordination and tactical gameplay</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Match Schedules</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Regular clan updates and organized match schedules</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gameplay Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Expert loadouts and advanced gameplay strategies</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Team Spirit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Friendly banter and strong team camaraderie</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clan Rules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Clan Rules</h2>
            <p className="text-muted-foreground text-lg">Honor, respect, and excellence define our code</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">⚔</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Respect All Members</h3>
                    <p className="text-muted-foreground">
                      Teamwork is key to our success. Treat every member with honor and dignity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">⚔</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">No Spam, Toxicity, or Cheating</h3>
                    <p className="text-muted-foreground">
                      Maintain a clean, professional environment. Fair play is non-negotiable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">⚔</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Stay Active & Represent with Honor</h3>
                    <p className="text-muted-foreground">
                      Active participation and honorable representation of the clan are expected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Livestreams Section */}
      <section id="livestreams" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Streams</h2>
            <p className="text-muted-foreground text-lg">Watch our elite members in action</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">JAY</CardTitle>
                    <CardDescription>Elite Sniper & Strategist</CardDescription>
                  </div>
                  <Play className="h-8 w-8 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Watch JAY dominate with precision gameplay and tactical expertise.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://www.tiktok.com/@stargirl_jay_" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Watch on TikTok
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">KG</CardTitle>
                    <CardDescription>Assault Specialist & Leader</CardDescription>
                  </div>
                  <Play className="h-8 w-8 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Experience KG's aggressive playstyle and leadership in intense battles.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://www.tiktok.com/@kglivee" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Watch on TikTok
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clan Tag Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join the Elite</h2>
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Clan Tag Format</CardTitle>
              <CardDescription className="text-lg">Ready to represent? Use our official clan tag:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <code className="text-2xl font-mono text-accent">ƦÑ・YOURNAME</code>
              </div>
              <p className="text-muted-foreground mb-6">
                Copy the format above and replace "YOURNAME" with your game name. This identifies you as part of the
                RogueNinjas elite.
              </p>
              <Button size="lg" className="text-lg px-8">
                <Users className="mr-2 h-5 w-5" />
                Apply to Join Clan
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">RogueÑinjaş</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Elite Call of Duty Mobile Clan • Operating with Skill, Strategy, and Stealth
          </p>
          <p className="text-accent font-bold">#StayRogue</p>
          <Separator className="my-6 max-w-xs mx-auto" />
          <p className="text-sm text-muted-foreground">© 2025 RogueNinjas. Dominating the battlefield since day one.</p>
        </div>
      </footer>
    </div>
  )
}
