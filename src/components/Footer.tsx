export default function Footer() {
    return (
        <footer className="border-t border-border bg-surface">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                    href="https://is0629sy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono font-bold text-foreground hover:text-accent transition-colors"
                >
                    is0629sy.com
                </a>
                <p className="text-sm text-muted-light">
                    &copy; {(() => {
                        const currentYear = new Date().getFullYear();
                        const startYear = 2026;
                        return currentYear === startYear ? startYear : `${startYear}-${currentYear}`;
                    })()} is0629sy. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
