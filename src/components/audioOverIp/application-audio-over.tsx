"use client"

export default function ApplicationsSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Applications of Audio Over IP
          </h2>
          <div className="mt-4 flex justify-center gap-2">
            <span className="h-1 w-1 bg-red-600 rounded-full"></span>
            <span className="h-1 w-1 bg-red-600 rounded-full"></span>
            <span className="h-1 w-1 bg-red-600 rounded-full"></span>
          </div>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
          
          <p>
            The versatility of Audio Over IP makes it suitable for a wide range of applications,
            from domestic audio setups to large-scale commercial and public installations.
            By transmitting IP audio over network infrastructure, these systems provide
            efficient sound distribution with centralized control.
          </p>

          <p>
            In residential environments, homeowners use IP network speaker systems for
            multi-room audio distribution. A single source such as a streaming service
            or media player can send sound to different rooms, with users controlling
            playback and volume remotely. Zoning capabilities allow customized listening
            experiences throughout a property.
          </p>

          <p>
            Retail and hospitality environments benefit from Audio Over IP for background
            music and announcements. Shops, restaurants, and hotels can broadcast music
            to enhance customer experience while also delivering real-time messages,
            emergency alerts, or promotional content to specific areas.
          </p>

          <p>
            In corporate and office spaces, zoned audio enables public announcements,
            paging systems, and conference room integration. Employees can receive
            live or pre-recorded messages across departments, while meeting rooms
            are equipped with high-quality IP audio solutions.
          </p>

          <p>
            Education institutions and public buildings rely on network PA systems
            for structured communication. Schools and universities use IP audio
            for announcements, safety instructions, and scheduled bell systems,
            while government buildings benefit from centralized paging.
          </p>

          <p>
            Transport hubs such as airports and train stations use IP audio
            for passenger announcements and safety messaging. Multi-zone control
            ensures that information reaches the correct locations efficiently.
          </p>

          <p>
            For outdoor venues and large-scale facilities, Audio Over IP supports
            long-distance, high-quality sound transmission. Stadiums, event spaces,
            and amusement parks use these systems to deliver clear audio across
            wide areas and integrate seamlessly with lighting and display systems.
          </p>

        </div>
      </div>
    </section>
  )
}