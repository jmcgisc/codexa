import { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export default function PortfolioCard({
  title,
  description,
  siteUrl,
  fallbackImage,
  fallbackVideo,
}) {
  const [iframeFailed, setIframeFailed] = useState(false);

  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg">
      <div className="w-full aspect-video bg-black">
        {!iframeFailed && siteUrl ? (
          <iframe
            src={siteUrl}
            className="w-full h-full border-none"
            loading="lazy"
            onError={() => setIframeFailed(true)}
          />
        ) : fallbackVideo ? (
          <video
            src={fallbackVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : fallbackImage ? (
          <img
            src={fallbackImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            Vista previa no disponible
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
