
import DocumentVerifierSingleFile from "@/components/DocumentVerifierSingleFile";

const Index = () => {
  return (
    <div style={{ 
      minHeight: "100vh",
      backgroundImage: "linear-gradient(to bottom right, #f9fafb, #f3f4f6)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        <h1 style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#1f2937"
        }}>Document Verification Portal</h1>
        <DocumentVerifierSingleFile />
      </div>
    </div>
  );
};

export default Index;
