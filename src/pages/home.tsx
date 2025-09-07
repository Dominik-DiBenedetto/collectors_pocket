import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scan, TrendingUp, Package, DollarSign, Users, Shield, Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
        <Helmet>
            <title>Home | Collectors Pocket</title>
        </Helmet>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Package className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Collectors Pocket</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/scan" className="text-sm font-medium hover:text-primary transition-colors">
              Scan a Card
            </Link>
            <Link to="/inventory" className="text-sm font-medium hover:text-primary transition-colors">
              My Inventory
            </Link>
            <Link to="/marketplace" className="text-sm font-medium hover:text-primary transition-colors">
              Marketplace
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="hidden md:inline-flex">
              Sign Up
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background" />
        <div className="absolute inset-0 bg-[url('/placeholder-d4cbd.png')] opacity-5" />

        <div className="container relative px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Now in Beta
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
              Scan, Track & Value Your <span className="text-primary">Trading Cards</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              Quickly scan cards, discover real-time market prices, and build your digital inventory. The modern way to
              manage your collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Scan className="mr-2 h-5 w-5" />
                Start Scanning
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Manage Your Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From scanning to selling, we've got every aspect of card collecting covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Scan className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Scan Your Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Upload or capture a photo of any card to instantly identify it and get detailed information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Price Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Get real-time market prices and historical trends to make informed buying and selling decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Keep your collection organized digitally. Set privacy levels and share with other collectors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Portfolio Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Track the total worth of your collection with automatic value updates and performance insights.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See Collectors Pocket in Action</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                From scan to inventory in seconds. Experience the future of card collecting.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border">
              <img src="/placeholder-3w8e7.png" alt="Collectors Pocket Dashboard Preview" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-card/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Collector Community</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Share your public collections, discover rare finds, and connect with fellow collectors worldwide.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <Users className="mx-auto h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">50K+ Collectors</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Active community sharing collections and insights
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Package className="mx-auto h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">2M+ Cards Scanned</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">Comprehensive database of trading cards</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="mx-auto h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Secure & Private</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Your collection data is protected and encrypted
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="text-lg px-8 py-6">
              Join the Community
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Collectors Pocket</span>
              </div>
              <p className="text-muted-foreground text-sm">
                The modern platform for trading card collectors to scan, track, and value their collections.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/scan" className="hover:text-foreground transition-colors">
                    Card Scanner
                  </Link>
                </li>
                <li>
                  <Link to="/inventory" className="hover:text-foreground transition-colors">
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link to="/marketplace" className="hover:text-foreground transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 Collectors Pocket. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Discord</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}