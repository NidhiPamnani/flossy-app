import { Lightbulb } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export function EducationPage() {
  return (
    
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.mainTitle}>How to Floss</Text>
          <Text style={styles.subtitle}>(the easy, no-pressure way)</Text>
          <Text style={styles.description}>
            Flossing doesn't need to be complicated or perfect. Here's how to do it in under a minute, in a way that actually sticks.
          </Text>
        </View>

        {/* Steps */}
        <View style={styles.stepsContainer}>
          <Step
            number="1"
            title="Start with enough floss"
            content={
              <>
                <Text style={styles.stepText}>
                  Grab about 18 inches of floss (roughly the length of your forearm).
                </Text>
                <Text style={styles.stepText}>
                  Wrap it 1-2 times around your middle finger, and the rest around the opposite finger.
                </Text>
                <Text style={[styles.stepText, styles.proTip]}>
                  Pro tip: Fresh floss = better clean (and fewer excuses tomorrow).
                </Text>
              </>
            }
          />

          <Image
            source={require('../assets/images/step1.jpeg')}
            style={{ width: '120%', height: 400, borderRadius: 16, marginBottom: 24 ,alignSelf: 'center'}}  
            resizeMode="cover"
          />
          <Step
            number="2"
            title="Get a good grip"
            content={
              <Text style={styles.stepText}>
                Hold the floss between your thumbs and index fingers, leaving about 1 inch of floss between them.
              </Text>
            }
          />

          <Image
            source={require('../assets/images/step2.jpeg')}
            style={{ width: '120%', height: 400, borderRadius: 16, marginBottom: 24 ,alignSelf: 'center'}}  
            resizeMode="cover"
            />

          <Step
            number="3"
            title="Gently guide it between your teeth"
            content={
              <>
                <Text style={styles.stepText}>
                  Slide the floss slowly between your teeth using a gentle back-and-forth motion.
                </Text>
                <Text style={styles.stepText}>
                  No snapping — your gums don't like surprises.
                </Text>
              </>
            }
          />

          <Image
            source={require('../assets/images/step3.jpg')}
            style={{ width: '120%', height: 400, borderRadius: 16, marginBottom: 24 ,alignSelf: 'center'}}  
            resizeMode="cover"
            />

          <Step
            number="4"
            title="Hug the tooth, not the gum"
            content={
              <>
                <Text style={styles.stepText}>
                  Curve the floss into a C-shape against one tooth.
                </Text>
                <Text style={styles.stepText}>
                  Move it up and down along the side of the tooth, just below the gumline.
                </Text>
                <Text style={styles.stepText}>Then switch sides and repeat.</Text>
              </>
            }
          />

          <Image
            source={require('../assets/images/step4.jpg')}
            style={{ width: '120%', height: 350, borderRadius: 16, marginBottom: 24 , alignSelf: 'center'}}  
            resizeMode="cover"
            />

          <Step
            number="5"
            title="Yes, the gumline matters"
            content={
              <>
                <Text style={styles.stepText}>
                  That tiny space below the gums is where plaque builds up. Go slowly, stay gentle, and don't force it — flossing should never hurt.
                </Text>
                <Text style={styles.stepText}>Then switch teeth and repeat.</Text>
              </>
            }
          />

          <Image
            source={require('../assets/images/step5.jpg')}
            style={{ width: '120%', height: 350, borderRadius: 16, marginBottom: 24, alignSelf: 'center' }}  
            resizeMode="cover"
            />

          <Step
            number="6"
            title="Use a clean section each time"
            content={
              <>
                <Text style={styles.stepText}>
                  Unwind fresh floss as you move from tooth to tooth.
                </Text>
                <Text style={styles.stepText}>
                  Yes, it matters! You're removing bacteria, not redistributing it.
                </Text>
              </>
            }
          />

          <Image
            source={require('../assets/images/step6.jpg')}
            style={{ width: '120%', height: 350, borderRadius: 16, marginBottom: 24 ,alignSelf: 'center'}}
            />

          <Step
            number="7"
            title="Don't stress about perfection"
            content={
              <>
                <Text style={styles.stepText}>A little bleeding at first is normal.</Text>
                <Text style={styles.stepText}>
                  Consistency matters more than technique and it gets easier fast.
                </Text>
              </>
            }
          />

          <Image
            source={require('../assets/images/step7.jpg')}
            style={{ width: '120%', height: 350, borderRadius: 16, marginBottom: 24 ,alignSelf: 'center'}}
            resizeMode="cover"
            />
        </View>

        {/* FAQ Items */}
        <View style={styles.faqContainer}>
          <FAQItem
            question="How often should I floss?"
            answer={
              <>
                <Text style={styles.faqText}>
                  There's no perfect schedule, the goal is consistency.
                </Text>
                <Text style={styles.faqText}>
                  Flossy's rule: <Text style={styles.highlight}>progress &gt; perfection</Text>.
                </Text>
              </>
            }
          />

          <FAQItem
            question="When should I floss?"
            answer={
              <>
                <Text style={styles.faqText}>Whenever you'll actually do it:</Text>
                <Text style={styles.bulletText}>• After brushing</Text>
                <Text style={styles.bulletText}>• Before bed</Text>
                <Text style={styles.bulletText}>• Right after dinner</Text>
                <Text style={styles.bulletText}>• During your nighttime routine</Text>
                <Text style={styles.faqText}>There's no "wrong" time — just your time.</Text>
              </>
            }
          />
        </View>

        {/* Tip Box */}
        <View style={styles.tipBox}>
          <View style={styles.tipContent}>
            <View style={styles.tipIconContainer}>
              <Lightbulb width={20} height={20} color="#5EEAF5" fill="#5EEAF5" />
            </View>
            <View style={styles.tipTextContainer}>
              <Text style={styles.tipTitle}>Flossy tip</Text>
              <Text style={styles.tipText}>
                Pair flossing with something you already do every night (brushing, skincare, Netflix, scrolling).
              </Text>
              <Text style={styles.tipText}>That's how habits stick.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <View style={styles.imagePlaceholder}>
      <Text style={styles.placeholderText}>📷</Text>
      <Text style={styles.placeholderLabel}>{label}</Text>
    </View>
  );
}

function Step({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <View style={styles.step}>
      <View style={styles.stepHeader}>
        <Text style={styles.stepNumber}>{number}.</Text>
        <Text style={styles.stepTitle}>{title}</Text>
      </View>
      <View style={styles.stepContent}>{content}</View>
    </View>
  );
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  return (
    <View style={styles.faqItem}>
      <Text style={styles.faqQuestion}>{question}</Text>
      <View style={styles.faqAnswer}>{answer}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 32,
    paddingTop: '22%',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#A8C5E3',
    marginBottom: 12,
    lineHeight: 20,
  },
  description: {
    fontSize: 14,
    color: '#ABABAB',
    lineHeight: 20,
  },
  stepsContainer: {
    marginBottom: 32,
  },
  step: {
    marginBottom: 24,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  stepNumber: {
    fontSize: 18,
    color: '#5EEAF5',
    marginRight: 12,
    flexShrink: 0,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
    flex: 1,
  },
  stepContent: {
    paddingLeft: 30,
  },
  stepText: {
    fontSize: 14,
    color: '#ABABAB',
    lineHeight: 20,
    marginBottom: 6,
  },
  proTip: {
    color: '#5EEAF5',
    marginTop: 8,
  },
  imagePlaceholder: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ABABAB',
    paddingVertical: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  placeholderText: {
    fontSize: 48,
    marginBottom: 8,
  },
  placeholderLabel: {
    fontSize: 14,
    color: '#ABABAB',
    textAlign: 'center',
  },
  faqContainer: {
    marginBottom: 32,
  },
  faqItem: {
    marginBottom: 32,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 12,
  },
  faqAnswer: {
    gap: 6,
  },
  faqText: {
    fontSize: 14,
    color: '#ABABAB',
    lineHeight: 20,
    marginBottom: 6,
  },
  bulletText: {
    fontSize: 14,
    color: '#ABABAB',
    lineHeight: 20,
    marginBottom: 4,
    paddingLeft: 8,
  },
  highlight: {
    color: '#5EEAF5',
  },
  tipBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  tipContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipIconContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  tipTextContainer: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    color: '#5EEAF5',
    fontWeight: '500',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#ABABAB',
    lineHeight: 20,
    marginBottom: 8,
  },
});

export default EducationPage;