import "./styles.css";
import { Key } from "@tonaljs/tonal";
import styled from "styled-components";
import img from "../assets/circle.jpg";

export default function App() {
  const Chromatics = ["D", "Eb"];

  return (
    <div className="App">
      <h2>Scales</h2>
      {Chromatics.map((note, i) => (
        <ScaleContainer>
          <MajorKey size={".75rem"} weight={700}>
            {Key.majorKey(note).chordsHarmonicFunction.map((note, i) => (
              <Note>{note}</Note>
            ))}
          </MajorKey>
          <MajorKey color={"red"}>
            <Label className="major">chord</Label>
            {Key.majorKey(note).chords.map((note, i) => (
              <Note>{note}</Note>
            ))}
          </MajorKey>
          <MajorKey color={"red"}>
            <Label className="major">secondary Dominants</Label>
            {Key.majorKey(note).secondaryDominants.map((note, i) => (
              <Note>{note}</Note>
            ))}
          </MajorKey>
          <MajorKey color={"red"}>
            <Label className="major">secondary Dominants Minor Relative</Label>
            {Key.majorKey(note).secondaryDominantsMinorRelative.map(
              (note, i) => (
                <Note>{note}</Note>
              )
            )}
          </MajorKey>
          <MajorKey color={"red"}>
            <Label className="major">substitute Dominants</Label>
            {Key.majorKey(note).substituteDominants.map((note, i) => (
              <Note>{note}</Note>
            ))}
          </MajorKey>
          <MajorKey color={"red"}>
            <Label className="major">substituteDominantsMinorRelative</Label>
            {Key.majorKey(note).substituteDominantsMinorRelative.map(
              (note, i) => (
                <Note>{note}</Note>
              )
            )}
          </MajorKey>
          <MajorKey color={"#666"}>
            {Key.majorKey(note).scale.map((note, i) => (
              <Note>{note}</Note>
            ))}
          </MajorKey>

          <MinorKey color={"#666"}>
            {Key.minorKey(Key.majorKey(note).minorRelative).natural.scale.map(
              (note, i) => (
                <Note>{note}</Note>
              )
            )}
          </MinorKey>
          <MinorKey color={"red"}>
            <Label className="minor">Natural Minor</Label>
            {Key.minorKey(Key.majorKey(note).minorRelative).natural.chords.map(
              (note, i) => (
                <Note>{note}</Note>
              )
            )}
          </MinorKey>
          <MinorKey color={"red"}>
            <Label className="minor">Harmonic Minor</Label>
            {Key.minorKey(Key.majorKey(note).minorRelative).harmonic.chords.map(
              (note, i) => (
                <Note>{note}</Note>
              )
            )}
          </MinorKey>
          <MinorKey color={"red"}>
            <Label className="minor">Melodic Minor</Label>
            {Key.minorKey(Key.majorKey(note).minorRelative).melodic.chords.map(
              (note, i) => (
                <Note>{note}</Note>
              )
            )}
          </MinorKey>
          <MinorKey size={"0.75rem"} weight={700}>
            {Key.minorKey(
              Key.majorKey(note).minorRelative
            ).natural.chordsHarmonicFunction.map((note, i) => (
              <Note>{note}</Note>
            ))}
          </MinorKey>
        </ScaleContainer>
      ))}
      <ImageContainer>
        <img src={img} />
      </ImageContainer>
    </div>
  );
}

const ScaleContainer = styled.div`
  margin: 2rem 0;
  width: 48rem;
`;

const Note = styled.div`
  display: inline-block;
  text-align: left;
  width: 4rem;
  padding: 0 0.25rem;
  border-right: 1px solid #fff;
`;

const MajorKey = styled.div`
  display: block;
  position: relative;
  width: 28rem;
  border-top: 1px solid #fff;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

const MinorKey = styled.div`
  display: block;
  position: relative;
  margin-left: 20rem;
  border-top: 1px solid #fff;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

const Label = styled.div`
  position: absolute;
  top: 0.25rem;
  letter-spacing: 1px;
  display: inline-block;
  padding: 0 0.25rem;
  font-size: 0.625rem;
  color: #666;
  &.major {
    left: 28rem;
    width: 20rem;
  }
  &.minor {
    left: -20rem;
    width: 20rem;
    text-align: right;
  }
`;

const ImageContainer = styled.div`
  height: 15rem;
  width: 15rem;
  position: relative;
  img {
    height: 100%;
    position: relative;
    width: 100%;
  }
`;
