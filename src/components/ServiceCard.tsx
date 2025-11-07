import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  link,
  delay = 0,
}: ServiceCardProps) => {
  const CardWrapper = link ? Link : "div";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <CardWrapper to={link || "#"}>
        <Card className="h-full transition-smooth hover:shadow-elegant hover:-translate-y-2 cursor-pointer group">
          <CardContent className="p-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-glow">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>
      </CardWrapper>
    </motion.div>
  );
};

export default ServiceCard;
