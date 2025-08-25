const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Namra Ikram. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion for technology and healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;