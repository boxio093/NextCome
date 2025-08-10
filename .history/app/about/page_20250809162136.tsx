"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card"
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            About <span className="text-primary">Our Company</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We are passionate about building exceptional digital experiences.
            Our team blends creativity, technology, and strategy to deliver
            impactful results.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Learn More</Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Right image in a shadcn card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <Image
                src="/team-photo.jpg"
                alt="Team photo"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
