import DocsHero from './docs/DocsHero';
import DocSection from './docs/DocSection';
import StepCard from './docs/StepCard';
import MobileControls from './docs/MobileControls';
import CodeBlock from './docs/CodeBlock';
import Callout from './docs/Callout';
import FAQ from './docs/FAQ';

export default function Documentation() {
    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <DocsHero />

            <DocSection
                id="getting-started"
                title="Getting Started"
                description="Install from Play Market and jump in—no setup required."
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <StepCard step={1} title="Download">
                        Open Play Market and install WobblePop. Launch the app from your home screen.
                    </StepCard>
                    <StepCard step={2} title="Allow & Calibrate">
                        Grant haptics/audio permissions if prompted. On first run, the game auto-calibrates touch.
                    </StepCard>
                    <StepCard step={3} title="Choose Controls">
                        Pick a control mode that fits your style — Simple or Swipe. You can switch anytime in Settings.
                    </StepCard>
                </div>
            </DocSection>

            <DocSection
                id="controls"
                title="Controls (Mobile)"
                description="Two modes: Simple (drag & release) or Swipe (draw a path)."
            >
                <MobileControls />
            </DocSection>

            <DocSection
                id="mechanics"
                title="Game Mechanics"
                description="Timing, positioning, and momentum — master the touch to bend shots and keep control."
            >
                <div className="space-y-4">
                    <Callout variant="info">
                        In Simple mode, longer drags add power; angled drags add curve. In Swipe mode, the smoother the line,
                        the more stable the trajectory; sharp turns trade speed for control.
                    </Callout>
                    <CodeBlock
                        language="txt"
                        wrap
                        code={`Ball physics:\n- Momentum carries through light collisions.\n- Drag angle (Simple) or path curvature (Swipe) applies spin.\n- Faster launches increase force but reduce fine control.\n\nMatch flow:\n- Possession builds a small boost over time.\n- Intercepts reset the boost.\n- Finishing with boost adds extra bend.`}
                    />
                </div>
            </DocSection>

            <DocSection id="tips" title="Tips & Tricks">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Callout variant="tip">
                        In Simple mode, use shorter drags for micro-adjustments; save long pulls for open lanes.
                    </Callout>
                    <Callout variant="tip">
                        In Swipe mode, draw gentle S-curves to bypass defenders and set up bend shots.
                    </Callout>
                    <Callout variant="tip">
                        Watch rebounds. Walls can set up curve-friendly second touches.
                    </Callout>
                    <Callout variant="warning">
                        Over-curving slows the ball — balance style with speed when defenders are close.
                    </Callout>
                </div>
            </DocSection>

            <DocSection id="faq" title="FAQ">
                <FAQ
                    items={[
                        {
                            q: 'Where do I download the game?',
                            a: 'From the Google Play Market. Use the “Get it on Google Play” button above.',
                        },
                        {
                            q: 'Is there iOS support?',
                            a: 'Not yet. We’re focused on Android first; iOS may come later.',
                        },
                        {
                            q: 'Can I switch control modes mid-game?',
                            a: 'Not yet. We’re working on this feature.',
                        },
                    ]}
                />
            </DocSection>
        </div>
    );
}
