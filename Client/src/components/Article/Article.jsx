import React, { useState } from 'react';
import {ArticleContainer,ArticleMid,ArticleHead,ImageContainer,AuthorName, Wrote,ArticleBody,ArticleDate,Read, Info,ArticleDesc,ArticleMain,Heading, SectionDivider, ImageContain} from './Style'
import {BsPersonCircle} from 'react-icons/bs' 
import {AiFillRead,AiOutlineComment} from 'react-icons/ai'

const a = "Next JS nothing but an add on to react taking the power of server side rendering and increasing the speed of websites upto 10 times. Additional props like getStaticprops getServerSideProps has made the developers life a lot easier. Using virtual dom instead of real dom and more like rendering once has boosten the speed pf websites a lot. It's just begining and this framework has get a lot of popularity not sure what will it be worth in next two threeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeee eee  e eee eeee eeeeeeee eeeeeeee eeeeeeee eeeeeeee eeeeeee eeeeeeeee     eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"

function Article(props) {
    const [img,setImg] = useState(true)
    const [showmore,setShowMore] = useState(false)
    return (
        <>
        <ArticleContainer>
            <ArticleHead>
             <ImageContainer  > 
                    <BsPersonCircle  size={"30px"} color='gray' />
                    </ImageContainer>
                    
                     <AuthorName>Aman Siddiqui</AuthorName><Wrote >author</Wrote>
            </ArticleHead>
            <ArticleMid>
                <ArticleBody>
                    <Heading>
POWER OF NEXT JS
                    </Heading>
                    <ImageContain src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAhFBMVEX///8AAADd3d319fWurq5ycnLh4eFISEiKior8/Py/v7/R0dGAgIDw8PDOzs7ExMScnJxnZ2eioqK0tLSoqKjm5uYzMzNYWFiTk5Pr6+teXl64uLhhYWE7OzvIyMhKSkofHx8WFhYNDQ0mJiaWlpaEhIR5eXlBQUEdHR0vLy9SUlI4ODiaUFcAAAAJgklEQVR4nO2da1v6PAzG1+EJEDkIoqiIB/w/6vf/fg9NNk5ubZOmdJfr/cJLTlv5sbRJmnZZ9pfVjd2AxmsWuwGN1+whdguars4wdgsar1HsBjReo0HsFjRdw17sFjRdg/PYLWi8/sVuQOM17sduQdM1XcduQdOV/xe7BU1XV13EbkLT9TyJ3YKma/0cuwVNV08lt9qsmXqM3YSm620RuwVN15NKmUazRmoZuwkN1436jN2EhmugXmM3oem6Uyl6NetcXcVuQsN1pu5iN6HhypVK82ZGdZRK0atZL+oydhMarrVK0atZPaVuY7eh2ZoplaJXs16V6sRuQ7M1Vyl6NetDpejVrKVK0atZD0ql6NWsL5WiV7POlXqP3YZma6pS9GpWX6Xo1axNeJ+iV7P+bRClymGTrlWKXs16VCl6NetiQ+gk0ess1/Iz6EHOEkwtw3+ckqnu24YQFOhf8E5fyJ6JGyuQ10z4VLEE/swI/mWsRVhsPoaVwy+80xeaWs90jm8c09u405kHIviqjKyq/lne8N+5F6Iz66kKRMqn2N0LURf+fyGeEjqiIno9FSKfjs8LUXYDD4iLWlZqF71eeiFyNjQvUwNE626HqPLjV3D+nHJG3eqv8oHpHLk+9KXpLfZeeIvIw9QAkUdG4kd/npIW0x6RW+UwGCTVio8EiNbAiG1qvoge4PTuC1se3C3zAq8iLwGiaU//feIewxdRdguMnOs4vzZvdlwHI4ZohEMvt9bUG1HhnTmO/Do0c41eBRF1fEzNHxG4yo5XxlC/1T5UowQR4YmZQaE/IsiNKXXv8M6BfuPc9biSiPAfnqkJIMrugZHDVMYl6XIXRYTXOsvUJBBBeky9Wb0UQOke0okhgvTvDekK3pcIooGTA9unuQfCiLI119REEGXgeFiyiBjQEQ4qjCh7Z5qaDKLC0TeO5t+OHdZW0ohypqkJIcr+08cxlb1OyCeSRoR9IT1hLoUIfiLDgeD1r9qXqySOKLsjOLk7SSEqUpA3dS+/6ldpSVx5RDP96Jt6DDFE2NfUZYnHpX9CkDwitHZX776UHCKMg6qdfDgLdReHAIgwV040NTlEGAdVZgJn9vGuQiEQgQdHzEEJIso+gURFscc75/oWzBftPXFLb4okIkTxu2Tok+eQBEGEqSOSqYkiQoO6PnoWXW+6WxsGUYdsaqKIionLwyphDOAY2fUwiPAXs8+d7CSLqJh8PLhinvUznF2bAiHC5whjhzAiHPn3vTOYRrInSioUClFGNDVhRMXk4+Toca3TbVIwRH2aqUkjKiYfy1ADryrerk3BEJEmGQIgwsnHVfHgu9oNcFI4RDBn7uzsyyPan3zE2JY0n72TGKLfnmJ+2BuYJY+omHzUozzOjXwwjxMQEaaOHE0tAKLt5CPOOrB3bQqJCLoDR1MLgQiz1JfZkyJ6IIcKimjmbmohEBUGhgkkcvS6VVBEmDpyWl8BiMbDHkGP9nALJx+PvUiiwiKC1JGTqXGq1Bzyq//K93oU0AVGNHA1tUCIBsVbfcowxRDVTHrAyOtgaoEQFV21V8FzaERQi+ow3gZCVB6WXRqWnQARREf2OYdiROtSZG/ZbIuTP6CFR4TZdqupBRn0oVyvEH/dYnhE8LJ156QgiDDPjzMi/NWvJ0DUdTG1EIiQzaQI1thbFYghMlTM3Dhc6AEQYY5Iz3hgsMa9p8cpEEHVkcXUAiBCtxE69Vf4l+k+ngQRTGyZcxHyiDD4wFQs1oswK/BPgyi3ujHiiDCELY+IOTXezWFOgwh+UqOpSSPCRMguPMQ1eay844kQQdWRqSRaGhFOpO1yRNh3v0adJLIgmllMTRgRTsfutwk9AM5yMDFEtlhap44MBXSyiOBbHU29oh/JWJN/MkTQG9SbmiyiFVjV0ZPvR7bnqtMhGhj7S1FEWFp8bNYY09I3kT0dIogDaiMlSURYJfM7kYeZEfKU7AkRwShTR0EQEWYaq0qtnva8SXedElHHYGqCiDDwqIo2cEKNGojQEHV7w/IrPl4vFtc4qgIilyCxV29qcoiuDJdKv/YCM4iGqFPmFNDcFVaCOSOCkLuagxgirJKpO9J9TTdlEhkRVBBqQqvxeIWM3BFltaYmhQi96PpkOVohKRDhISr7Ho2KhEj/xquqF6QQ4c4W9ZWo2JdXNqFOLET59tt86HVL56XFOei6ZtgVQgTTv8ZgCLsISs0jC9FyW07UWS4fSIjA8a1YDSaDKHf4/uhXEuYeuVfRz17MTEKkv0XFTf5kEL2q6qMfaGWxxWPx+iLtX9z3S0okRDCo/DY1EUSYo7bNQF5YevTK95MRoX+hXkaQtKchgtTRL1OTQPToOKJjh+WyoB/EQ5TNis3B1LhLRqTDyV97xAggwuJGF78Qhz3X9bFMRNrRvoL1i18FIkLko3/F4wUaAoigOU7RBTpPrrUQbETw8APGBioi2G3h6Df0R4S7A7k1A11wx707vBCB+a/piAa/Tc0b0VJRjoCBnFvlvBuiznAI48QAB6OzUTndAszIiCB1dMjaF5Et8DgWFK671UJYET0MsAFQoTPcbp9S2ElPjyB0RNBhHnzCF9E30dnBvt2pFsKGaIrR1x1clfkrRoB9tRejPXAQ6R/9bf8JT0Q4lUjZicO9FsKG6A57tWUxxhflXtA1/jwXbggDEcDdb58fIpfA41jOtRA2RNdFp4Zu2XYQ2O53qn84DiL40N5n/BBBU6j3LndNQVr7ol7hE3Zv15+jvTzL8OPzeoTfkYUIZpR3DwHRed4nChuEFwR1NhovPftoLpa7Jq+GuzkwDebuoIvdZ+n752MHZl09Ew8RpI62n2Ii0hPQOD/G2VjKrRYiIiLISpRBgAcirPnk1FdhCtJWCyGBaMxEpDuD0tSY+13PyxQZa9VrUQthuQChz4p1J1Ad4qVbbpn1rTw3W//76ire7gJtUj+ZmlWjZGpWzT3va9AC6e6IW1ffFvWTqVk1SqZm1dxv7Wob1GWGWG1SnkzNqkkyNasWydRs6r55rRNvhfJkalZNkqlZtUj3lbRp0x1x79bTGuXJ1KyaJFOzapFMzaZNd5RMzaKcd7eeVmma7rlt1RP9FiJtU9dne8GWKE+mZtU0mZpVC89ClTbIZ/u8lugimZpV05/YLWi+5pRbiLRU/A28W6M8mZpVE97WcK3SnL8pbGvE3IWxTcq59+1okSa0e5e2UuLbX/89dZIDaVXOvNFSm7RMdaJWUW7q3lJ1/8a82v/itlwBGdYyKgAAAABJRU5ErkJggg==' />
                    <ArticleDesc>
                        <ArticleMain>{showmore ? a :  a.substring(0,150)}</ArticleMain>
                        <Read href='/'>Read More</Read>

                        <ArticleDate>
                            <Info>
                            <AiFillRead color='#f3ca20' size={"20px"} style={{marginRight:"5px",paddingTop:"4px"}}  onClick={()=>setShowMore(true)} />
                            <p style={{color:"gray"}}>6 min Read</p>
                            </Info>
                            <Info>
                            <AiOutlineComment color='#f3ca20' size={"20px"} style={{marginRight:"5px"}}/>
                            <p style={{color:"gray"}}>No Comments</p>
                            </Info>
                        </ArticleDate>
                      

                    </ArticleDesc>
                </ArticleBody>
            </ArticleMid>
            </ArticleContainer>
            <SectionDivider></SectionDivider>
            <ArticleContainer>
            <ArticleHead>
                <ImageContainer  >
                    <BsPersonCircle  size={"30px"} color='gray' /> 
                     </ImageContainer>
                     <AuthorName>Aman Siddiqui</AuthorName><Wrote>author</Wrote>
            </ArticleHead>
            <ArticleMid>
                <ArticleBody>
                    <Heading>
POWER OF NEXT JS
                    </Heading>
                    <ImageContain src='data:image/jpeg;base64,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' />
                    <ArticleDesc>
                        <ArticleMain>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum illum ab sit ipsam voluptas labore eligendi. Tenetur sed inventore quisquam, rerum natus aut itaque fuga sit obcaecati. Iste, quibusdam facilis! <a href='#'>getStaticprops</a>, <a href='#'>getServerSideProps</a> has made the developers life a lot easier.</ArticleMain>
                        <ArticleDate>
                            <Info>
                            <AiFillRead size={"20px"} style={{marginRight:"5px",paddingTop:"4px"}}/>
                            <p style={{color:"gray"}}>6 min Read</p>
                            </Info>
                            <Info>
                            <AiOutlineComment size={"20px"} style={{marginRight:"5px"}}/>
                            <p style={{color:"gray"}}>No Comments</p>
                            </Info>
                        </ArticleDate>

                    </ArticleDesc>
                </ArticleBody>
            </ArticleMid>
        </ArticleContainer>
        </>
    );
}

export default Article;