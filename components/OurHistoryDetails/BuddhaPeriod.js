import React from 'react';
import Image from "next/image";
import SubHeading from "./SubHeading";

function BuddhaPeriod({ language, openModal }) {

    return (
        <>
            <SubHeading language={language} english="BUDDHA PERIOD" hindi="बुद्ध काल" />
            <div className="grid md:grid-cols-3 gap-6">
                {/* Left Image */}
                <div className="md:col-span-1 ">
                    <Image
                        src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591330/rmmv/mallmahajanpada/ganaSanghas_octbdk.jpg"
                        alt="mall-mahajanpada-img"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
                        onClick={() =>
                            openModal({
                                url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591330/rmmv/mallmahajanpada/ganaSanghas_octbdk.jpg",
                                tagEng: "Mall Mahajanpada",
                                tagHindi: "मल्ल महाजनपद",
                            })
                        }
                    />
                    <div className="flex items-center justify-center">
                        <h2>
                            {language === "english"
                                ? "Mall Mahajanpada"
                                : "मल्ल महाजनपद"}
                        </h2>
                    </div>
                    <Image
                        src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591333/rmmv/mallmahajanpada/King_of_the_Mallas_under_siege_wjwqoy.jpg"
                        alt="mall-mahajanpada-img"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
                        onClick={() =>
                            openModal({
                                url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591333/rmmv/mallmahajanpada/King_of_the_Mallas_under_siege_wjwqoy.jpg",
                                tagEng: "King of the Mallas under siege",
                                tagHindi: "मल्ल महाजनपद",
                            })
                        }
                    />
                    <div className="flex items-center justify-center">
                        <h2>
                            {language === "english"
                                ? "King of the Mallas under siege"
                                : "मल्ल महाजनपद"}
                        </h2>
                    </div>
                </div>

                {/* Bio */}
                {language === "english" ? (
                    <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                        <p className="font-serif">
                            Malla (Prakrit: 𑀫𑀮𑁆𑀮𑀈 Mallaī; Pali: Malla; Sanskrit: मल्ल​ Malla) was an ancient Indo-Aryan tribe of north-eastern South Asia whose existence is attested during the Iron Age. The population of Malla, the Mallakas, were divided into two branches, each organised into a gaṇasaṅgha (an aristocratic oligarchic republic), presently referred to as the Malla Republics, which were part of the larger Vajjika League.
                            The Mallakas lived in the region now covered by the Kushinagar district in India, although their precise borders are yet to be determined. The Mallakas&#39; neighbours to the east across the Sadānirā river were the Licchavikas, their neighbours to the west were the Sakyas, Koliyas, Moriyas, and Kauśalyas, the southern neighbours of the Mallakas were the Kālāmas and the Gaṅgā river, and the northern Mallaka borders were the Himālaya mountains. The territory of the Mallakas was a tract of land between the Vaidehas and the Kauśalyas.
                        </p>
                        <p className="font-serif">
                            The territories of the two Malla republics were divided by the river named Hiraññavatī in Pāli, and Hiraṇyavatī in Sanskrit, and the two Malla republics respectively had their capitals at Kusinārā, identified with the modern village of Kāsiā in Kushinagar, and at Pāvā (now known as Fazilnagar). Kusinārā was close to the Sakya capital of Kapilavatthu to its north-east, and Pāvā was close to the Licchavika capital of Vesālī.
                            The Mallakas are called Malla in Pāli texts, Mallai in Jain Prākrit texts, and Malla in Sanskrit texts.
                            The Mallakas were an Indo-Aryan tribe in the eastern Gangetic plain in the Greater Magadha cultural region. Similarly to the other populations of the Greater Magadha cultural area, Mallakas were initially not fully Brahmanised despite being an Indo-Aryan people, but, like the Vaidehas, they later became Brahmanised and adopted the Vāseṭṭha (in Pali) or Vaśiṣṭha (in Sanskrit) gotra. At some point in time, the Mallakas became divided into two separate republics with their respective capitals at Kusinārā and Pāvā, possibly due to internal trouble, and henceforth the relations between the two Mallaka republics remained uncordial. Both Mallaka republics nevertheless became members of the Licchavi-led Vajjika League, within which, unlike the Vaidehas, they maintained their own sovereign rights because they had not been conquered by the Licchavikas, and the Mallakas held friendly relations with the Licchavikas, the Vaidehas, and the Nāyikas who were the other members of this league.
                        </p>
                        <p className="font-serif">
                            However occasional tensions between the Mallakas and the Licchavikas did arise, such as in the case of the man named Bandhula, a Mallaka who, thanks to his education received in Takṣaśilā, had offered his services as a general to the Kauśalya king Pasenadi so as to maintain the good relations between the Mallakas and Kosala. Bandhula, along with his wife Mallikā, violated the Abhiseka-Pokkharaṇī sacred tank of the Licchavikas, which resulted in armed hostilities between the Kauśalyas and the Licchavikas. Bandhula was later treacherously murdered along with his sons by Pasenadi, and, in retaliation, some Mallakas helped Pasenadi&#39;s son Viḍūḍabha usurp the throne of Kosala to avenge the death of Bandhula, after which Pasenadi fled from Kosala and died in front of the gates of the Māgadhī capital of Rājagaha.
                            The Buddha arrived in Pāvā shortly after the Mallakas there had inaugurated their new santhāgāra, which they had named Ubbhataka. From Pāvā, the Buddha and his followers went to Kusinārā, and on the way they crossed two rivers, the first one being named Kakutthā in Pali and Kukustā in Sanskrit, and the second one being the Hiraññavatī which separated the two Mallaka republics. The Buddha spent his final days in the Malla republic of Kusinārā, and when he sent Ānanda to inform the Mallakas of Kusinārā of his impending death, Ānanda found the Mallaka Council holding a meeting about public affairs in their santhāgāra.
                            When Ānanda went again to the Mallakas of Kusinārā to inform them of the Buddha&#39;s passing, he found them this time holding a meeting to discuss the funeral ceremony of the Buddha in the santhāgāra. After the Buddha&#39;s cremation, his remains were honoured in the santhāgāra of Kusinārā for seven days, and it was in this santhāgāra that the Mallakas of Kusinārā received the envoys of Magadha, Licchavi, Shakya, Buli, Koliya, the Mallakas of Pāvā, and Moriya, who all went to Kusinārā to claim their shares of the Buddha&#39;s relics. The Licchavikas, the Mallakas, and the Sakyas were able to claim shares of the relics, but the other members of the Vajjika League, the Vaidehas and the Nāyikas, were not among the states claiming a share because they were dependencies of the Licchavikas without their own sovereignty, and therefore could not put forth their own claim while Licchavi could. The Mallakas of Pāvā were the first ones to arrive with an army to Kusinārā, and they put forth their claim to the relics in rude and hostile terms. In the end, each Malla republic obtained a share of the Buddha&#39;s relics and built their own stūpas and gave their own feasts to commemorate this event.
                            After the death of the 24th Jain Tīrthaṅkara, Mahāvīra, the Mallakas and the Licchavikas jointly instituted a festival of lights to commemorate his passing.
                        </p>
                    </div>
                ) : (
                    <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                        <p className="font-serif">
                            मल्ल (प्राकृत: 𑀫𑀮𑁆𑀮𑀈 मल्लई; पालि: मल्ल; संस्कृत: मल्ल) उत्तर–पूर्वी दक्षिण एशिया की एक प्राचीन इंडो-आर्य जनजाति थी, जिसका अस्तित्व लौह युग के दौरान प्रमाणित होता है। मल्ल जनजाति के लोग मल्लक कहलाते थे। ये दो शाखाओं में विभक्त थे और प्रत्येक शाखा एक-एक गणसंघ (कुलीनतंत्रीय गणराज्य) के रूप में संगठित थी। इन्हें सामूहिक रूप से मल्ल गणराज्य कहा जाता है, जो व्यापक वज्जिका संघ का हिस्सा थे।

                            मल्लक वर्तमान भारत के कुशीनगर ज़िले के क्षेत्र में निवास करते थे, हालांकि उनकी सटीक सीमाएँ अभी तक निश्चित नहीं की जा सकी हैं। सदानीरा नदी के पार पूर्व दिशा में उनके पड़ोसी लिच्छविक थे। पश्चिम में उनके पड़ोसी शाक्य, कोलिय, मोरिय और कौशल्य थे। मल्लकों के दक्षिण में कालाम जनपद तथा गंगा नदी स्थित थी, जबकि उत्तर में उनकी सीमा हिमालय पर्वत से लगती थी। मल्लकों का क्षेत्र विदेह और कौशल के बीच स्थित भू-भाग में फैला हुआ था।
                        </p>
                        <p className="font-serif">
                            दोनों मल्ल गणराज्यों के क्षेत्र पालि में हिरञ्ञवती तथा संस्कृत में हिरण्यवती नामक नदी द्वारा विभाजित थे। इन दोनों मल्ल गणराज्यों की राजधानियाँ क्रमशः कुशीनारा और पावा थीं। कुशीनारा की पहचान वर्तमान कुशीनगर ज़िले के कसिया गाँव से की जाती है, जबकि पावा को आज फाज़िलनगर के नाम से जाना जाता है। कुशीनारा अपने उत्तर–पूर्व में स्थित शाक्य राजधानी कपिलवत्तु के निकट था, और पावा लिच्छविकों की राजधानी वैशाली के समीप स्थित था।

                            पालि ग्रंथों में मल्लकों को मल्ल, जैन प्राकृत ग्रंथों में मल्लई, तथा संस्कृत ग्रंथों में मल्ल कहा गया है।

                            मल्लक व्यापक मगध सांस्कृतिक क्षेत्र के अंतर्गत आने वाले पूर्वी गंगा मैदान की एक इंडो-आर्य जनजाति थे। व्यापक मगध क्षेत्र की अन्य जनसंख्याओं की तरह, इंडो-आर्य होने के बावजूद प्रारंभ में मल्लक पूर्णतः ब्राह्मणीकरण से प्रभावित नहीं थे। किंतु बाद में, विदेहों की भाँति, वे ब्राह्मणीकरण की प्रक्रिया से गुज़रे और उन्होंने वासेट्ठ (पालि) अथवा वशिष्ठ (संस्कृत) गोत्र को अपनाया।

                            किसी समय मल्लक आंतरिक कारणों से दो पृथक गणराज्यों—कुशीनारा और पावा—में विभाजित हो गए, जिसके बाद दोनों मल्ल गणराज्यों के बीच संबंध सौहार्दपूर्ण नहीं रहे। इसके बावजूद, दोनों मल्ल गणराज्य लिच्छवियों के नेतृत्व वाले वज्जिका संघ के सदस्य बने। इस संघ के भीतर, विदेहों के विपरीत, मल्लकों ने अपने संप्रभु अधिकार बनाए रखे, क्योंकि वे लिच्छवियों द्वारा पराजित नहीं किए गए थे। मल्लकों के लिच्छविकों, विदेहों तथा नायिकों (जो इस संघ के अन्य सदस्य थे) के साथ मैत्रीपूर्ण संबंध बने रहे।
                        </p>
                        <p className="font-serif">
                            हालाँकि मल्लकों और लिच्छविकों के बीच कभी-कभी तनाव उत्पन्न हो जाता था। इसका एक उदाहरण बंधुल नामक व्यक्ति का है, जो एक मल्लक था और जिसने तक्षशिला में शिक्षा प्राप्त की थी। मल्लकों और कौशल के बीच अच्छे संबंध बनाए रखने के उद्देश्य से उसने कौशल नरेश प्रसेनजित (पसेनदि) के यहाँ सेनापति के रूप में अपनी सेवाएँ प्रदान की थीं। बंधुल ने अपनी पत्नी मल्लिका के साथ लिच्छविकों के पवित्र जलाशय अभिषेक-पोखरणी का उल्लंघन किया, जिसके परिणामस्वरूप कौशल और लिच्छविकों के बीच सशस्त्र संघर्ष आरंभ हो गया। बाद में प्रसेनजित ने छलपूर्वक बंधुल तथा उसके पुत्रों की हत्या करवा दी। इसके प्रतिशोधस्वरूप कुछ मल्लकों ने प्रसेनजित के पुत्र विडूडभ (विदूड़भ) को कौशल का सिंहासन हथियाने में सहायता की, ताकि बंधुल की मृत्यु का बदला लिया जा सके। इसके बाद प्रसेनजित कौशल से भाग गया और मगध की राजधानी राजगृह के द्वार पर उसकी मृत्यु हो गई।

                            मल्लकों द्वारा अपने नए संथागार (सभा-भवन), जिसका नाम उब्भट्ठक रखा गया था, के उद्घाटन के कुछ समय बाद ही बुद्ध पावा पहुँचे। पावा से बुद्ध अपने अनुयायियों के साथ कुशीनारा गए। मार्ग में उन्होंने दो नदियाँ पार कीं—पहली का नाम पालि में ककुत्था और संस्कृत में कुकुस्ता था, तथा दूसरी हिरञ्ञवती नदी थी, जो दोनों मल्ल गणराज्यों की सीमा बनाती थी। बुद्ध ने अपने अंतिम दिन कुशीनारा के मल्ल गणराज्य में बिताए। जब उन्होंने अपने आसन्न महापरिनिर्वाण की सूचना देने के लिए आनंद को कुशीनारा के मल्लकों के पास भेजा, तब आनंद ने मल्ल परिषद् को उनके संथागार में सार्वजनिक कार्यों पर विचार-विमर्श करते हुए पाया।

                            बुद्ध के महापरिनिर्वाण की सूचना देने के लिए जब आनंद पुनः कुशीनारा के मल्लकों के पास गया, तब उसने उन्हें संथागार में बुद्ध के अंतिम संस्कार की व्यवस्था पर चर्चा करते हुए पाया। बुद्ध के दाह-संस्कार के बाद उनके अवशेषों को सात दिनों तक कुशीनारा के संथागार में सम्मानपूर्वक रखा गया। इसी संथागार में कुशीनारा के मल्लकों ने मगध, लिच्छवि, शाक्य, बुलि, कोलिय, पावा के मल्लक तथा मोरिय राज्यों से आए दूतों का स्वागत किया, जो सभी बुद्ध के अवशेषों में से अपना-अपना हिस्सा माँगने के लिए कुशीनारा पहुँचे थे।

                            लिच्छविक, मल्लक और शाक्य अपने-अपने हिस्से का दावा करने में सफल रहे, किंतु वज्जिका संघ के अन्य सदस्य—विदेह और नायिक—अपने-अपने दावे प्रस्तुत नहीं कर सके, क्योंकि वे लिच्छविकों के अधीन थे और उनके पास स्वतंत्र संप्रभुता नहीं थी। पावा के मल्लक सबसे पहले सेना के साथ कुशीनारा पहुँचे और उन्होंने अवशेषों पर अपना दावा कठोर तथा शत्रुतापूर्ण शब्दों में प्रस्तुत किया। अंततः दोनों मल्ल गणराज्यों को बुद्ध के अवशेषों में से हिस्सा प्राप्त हुआ। उन्होंने अपने-अपने स्तूप बनवाए और इस स्मरणीय घटना के उपलक्ष्य में अपने-अपने भोजों का आयोजन किया।

                            चौबीसवें जैन तीर्थंकर महावीर के निर्वाण के बाद मल्लकों और लिच्छविकों ने संयुक्त रूप से उनके स्मरण में दीपोत्सव (प्रकाशोत्सव) की परंपरा की स्थापना की।
                        </p>

                    </div>
                )}
            </div>

        </>
    )
}

export default BuddhaPeriod;
